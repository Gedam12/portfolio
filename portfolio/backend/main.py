from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from groq import Groq
import json

app = FastAPI()

# Enable CORS so your React app can talk to this server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

client = Groq(api_key="YOUR_GROQ_API_KEY")

@app.post("/upload-resume")
async def upload_resume(file: UploadFile = File(...)):
    # Read the file content
    content = await file.read()
    
    # Simple extraction logic (In production, use PyPDF2 to parse the content)
    # For now, we send the prompt to Llama 3 on Groq
    chat_completion = client.chat.completions.create(
        messages=[
            {"role": "system", "content": "Extract resume data into JSON. Keys: NAME, TITLE, SUMMARY, PROJECTS, SKILLS, TIMELINE."},
            {"role": "user", "content": f"Parse this resume: {content}"}
        ],
        model="llama3-70b-8192",
        response_format={"type": "json_object"}
    )
    
    return json.loads(chat_completion.choices[0].message.content)