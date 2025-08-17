import os
import json
from langchain_aws.graphs import NeptuneGraph
from langchain_aws.chains.graph_qa.neptune_cypher import create_neptune_opencypher_qa_chain
from langchain.openai import OpenAI  # adjust if using another LLM provider

# Initialize Neptune connection and chain (reuse across invocations)
_graph = NeptuneGraph(
    host=os.getenv("NEPTUNE_HOST"),
    port=int(os.getenv("NEPTUNE_PORT", "8182")),
    use_https=os.getenv("NEPTUNE_USE_HTTPS", "true").lower() == "true",
)
_llm = OpenAI(
    model=os.getenv("LLM_MODEL", "gpt-4"),
    temperature=float(os.getenv("LLM_TEMPERATURE", "0"))
)
_chain = create_neptune_opencypher_qa_chain(llm=_llm, graph=_graph)

def lambda_handler(event, context):
    # Validate route and method
    path = event.get("rawPath") or event.get("path")
    method = (event.get("requestContext", {}).get("http", {}) or {}).get("method", "")
    if path != "/query" or method != "GET":
        return _response(404, "Not Found")

    # Extract question
    qs = event.get("queryStringParameters") or {}
    question = qs.get("question", "").strip()
    if not question:
        return _response(400, "Missing 'question' parameter")

    # Query chain
    try:
        result = _chain.invoke({"query": question})
        answer = result["result"].content
        return _response(200, answer)
    except Exception as e:
        return _response(500, f"Internal error: {str(e)}")

def _response(status_code, body_text):
    return {
        "statusCode": status_code,
        "headers": {"Content-Type": "text/plain"},
        "body": body_text
    }