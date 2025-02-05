🛍️ VendorVision
VendorVision is an AI-powered customer review analysis platform that leverages Django, Google Cloud NLP, and Plotly Dashboards to extract insights from customer reviews. The system fetches reviews from Google Places API, analyzes sentiments using Google Cloud Natural Language API, and visualizes trends using interactive dashboards.

🚀 Features
✅ Fetch Reviews from Google Places API – Retrieve real-time reviews for business locations.  
✅ AI-Powered Sentiment Analysis – Classify reviews as Positive, Negative, or Neutral.  
✅ Review Summarization – Identify trends and key phrases in customer feedback.  
✅ Improvement Suggestions – Uses Google's Gemini AI to suggest business enhancements.  
✅ Multi-Language Support – Detects and translates reviews using Google Translate API.  
✅ Interactive Dashboard – Visualize customer feedback using Plotly graphs. 

🏗️ Tech Stack  
Backend:  
🔹 Django – Python web framework for handling API requests.  
🔹 Google Cloud Natural Language API – Sentiment analysis and NLP.  
🔹 Google Translate API – Language detection and translation.  
🔹 Google Places API – Fetches business reviews.  
🔹 Gemini AI – Generates business improvement suggestions.  

Frontend:  
🔹 HTML, CSS, JavaScript – Custom-built templates.  
🔹 Plotly.js – Dynamic charts for visualizing customer insights.  

Database:
🔹 PostgreSQL / SQLite – Stores review data (if needed).

📦 Installation  
1️⃣ Clone the Repository  
git clone https://github.com/ZaBy10/VendorVision.git    
cd VendorVision  

2️⃣ Set Up Virtual Environment    
python -m venv venv  
source venv/bin/activate  # macOS/Linux  
venv\Scripts\activate     # Windows  

3️⃣ Install Dependencies    
pip install -r requirements.txt  

4️⃣ Set Up Google Cloud API Credentials  
Create a .env file in the project's root and add:    
GOOGLE_APPLICATION_CREDENTIALS=path_to_your_google_credentials.json  
GOOGLE_AI_API_KEY=your_gemini_api_key  
API_KEY=your_google_places_api_key  
Export credentials (for macOS/Linux):  
export GOOGLE_APPLICATION_CREDENTIALS="path_to_your_google_credentials.json" 

5️⃣ Apply Database Migrations (if using a database)   
python manage.py makemigrations  
python manage.py migrate  

6️⃣ Run the Django Server  
python manage.py runserver  
Access the app at http://127.0.0.1:8000/  

📊 Usage  
1️⃣ Search for a Place – Enter a business name and city to find branches.  
2️⃣ Select a Branch – Choose a location to fetch customer reviews.  
3️⃣ Analyze Reviews – NLP processes and categorizes reviews (Positive, Negative, Neutral).  
4️⃣ View Interactive Dashboard – See sentiment distribution, ratings, and common phrases.  
5️⃣ Get Business Suggestions – AI-generated recommendations for improvement.  

📂 Project Structure  

VendorVision/  
│── place_reviews/             # Django App  
│   ├── templates/             # HTML Templates  
│   │   ├── index.html         # Search page  
│   │   ├── select_branch.html # Select a business branch  
│   │   ├── review_analysis.html # Displays analyzed reviews  
│   │   ├── review_dashboard.html # Interactive sentiment dashboard  
│   │   ├── live_analysis.html # Analyze user-provided reviews  
│   ├── views.py               # Main business logic (API integrations, NLP, AI)  
│   ├── urls.py                # URL mappings  
│── static/                    # CSS & JS files  
│── requirements.txt           # Python dependencies  
│── manage.py                  # Django project manager  
│── README.md                  # Documentation  


🎨 Interactive Dashboard  
The sentiment analysis dashboard is built using Plotly and provides:  

📊 Pie Chart – Sentiment distribution of customer reviews.  
📈 Scatter Plot – Sentiment score vs. review rating.  
📉 Ratings Histogram – Distribution of customer ratings.  


🎯 Future Enhancements  
✅ Improve AI model accuracy with custom-trained NLP models.  
✅ Add support for multiple review platforms beyond Google Places.  
✅ Integrate user authentication for personalized insights.  
✅ Implement automated email reports for businesses.  

📞 Contact  
For any queries or collaboration, reach out to:  
📧 Email: mohammedzaby10@gmail.com  
🌐 GitHub: ZaBy10  
