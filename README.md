# Azure AD Integration with Python API
## Introduction
This repository has code of python API built with FastAPI. We have used Azure AD authentication to secure the API. I am not the python developer :). I am sure the project structure would not be perfect like python experts, still I tried to make it as professional as possible.
I went through a lot of articles and forums , to check API security for Python. Most of the articles are very good and great source of knowledge, but I did not find any article or place where I found full working code. I hope this repository will help to those people who wants to use OAuth security with good project structure.
There are certain steps need to follow to make this repository working in local environment. I have mentioned those steps below.
## Step 1 : Clone the repository.

1.  navigate to folder where you want to clone the project.
![image](https://user-images.githubusercontent.com/20739249/136545479-2936ba09-1dcc-422c-98fd-98a97fbbf217.png)
2. open project  folder in CMD or terminal.

![image](https://user-images.githubusercontent.com/20739249/136545614-63d024cc-06d4-4fb7-884a-c7f6ca9792c4.png)

## Step 2 : Build and Run project.
   1. Once project is cloned to local. Open it in your favorite IDE. I am using VsCode here.
   2. Open project path to terminal or CMD and run below command to make virtual environment for project.
   ```
    py -m venv venv
   ```
   3. above command will create a new folder with name venv. to run project under this local environment , we will need to select the environment by running below command.
   ```
   venv/Scripts/activate
   ```
   **Note:** your terminal or CMD should be like below image after running command.
![image](https://user-images.githubusercontent.com/20739249/136546298-34fa7d06-ee54-456a-a256-89b25117e2b7.png)
  4.  once you are in virtual environment, install all required packages. To install required packages run below command.
  ```
  pip install -r requirements.txt
  ``` 
   5. After running above command, your project will have all required packages to run this project successfully.
## Step 3 : Change config.
1. Open appConfig.py and change accordingly.
```
CLIENT_ID  =  ""  # Application (client) ID of app registration
CLIENT_SECRET  =  ""# Client Secret of app registration
TENANT_ID="" # Tenant ID of Azure where application is registered.
```
2. Open main.py , and change the scope according to the scope you mentioned at the time of app registration using "Expose an API" option.
3. Once everything is done run the project with below command.
```
uvicorn main:app --reload     
```
## Step 3 : Run Application.
1. Open browser and navigate to "http://localhost:8000/docs".
![image](https://user-images.githubusercontent.com/20739249/136548755-65dcdb53-1073-4cbe-a204-18da133b86a8.png)
2. Click on Authorize button on right side corner. It will open the popup. Click on the scope mentioned at the bottom of popup and click on "Authorize".

![image](https://user-images.githubusercontent.com/20739249/136549169-7dd8e52c-9f2d-41ba-974b-9a78e8887b00.png)

this is it. now you can run any endpoint, it will automatically take the bearer token and that token will be validated in python API.
