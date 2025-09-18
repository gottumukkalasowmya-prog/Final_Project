
# Identify Car Wash Services

###  Requirements

1. Display 5 Car washing services name and phone numbers, near your location with highest rating (more than 4) on top 
2. Try to register for Free Listing, fill the form with any one input invalid (example: phone); Capture the error message & display 
3. Go to Gym and retrieve all sub-menu items and store in a List; Display the same (Suggested Site: justdial.com )
   
### Key Automation Scope

1. Handling Alert, search option
2. Multiple navigation path for one page
3. Filling form (in different objects in web page)
4. Capture warning message
5. Extract menu items & store in collections
6. Navigating back to home page

##  Git Workflow

### Clone the repository

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

### Create a new branch

git checkout -b feature/car-wash-fetch

###  Stage and commit changes

git add .
git commit -m "Added car wash service fetch logic"

### Push to remote

git push origin feature/car-wash-fetch

###  Pull latest changes from main

git checkout main
git pull origin main

### Merge feature branch into main

git checkout main
git merge feature/car-wash-fetch

##  npm Setup

### Install dependencies

npm install

### Run the app 

npm start

### Run in development mode

npm run dev

### Run build 

npm run build

## Cypress Commands

### Open Cypress Test Runner

npx cypress open

### Run tests in headless mode

npx cypress run

### Run specific spec file

npx cypress run --spec "cypress/e2e/carwash.cy.js"

### Run tests in Chrome browser

npx cypress run --browser chrome

### Run tests in Electron browser

npx cypress run --browser electron
