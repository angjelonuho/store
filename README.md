# Mini E-Comerce 
This is a small e-comerce project selling exact eight product a week.


## Snapshots
<details>
 <summary>Homne/Products</summary>
 <img src="/readmeImg/home.png"  />
</details>
<details>
 <summary>Shpping Cart</summary>
 <img src="/readmeImg/cartWitems.png"  />
</details>
<details>
 <summary>Shpping Cart Empty</summary>
 <img src="/readmeImg/cartEmpty.png"  />
</details>

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
### Prerequisites
What things you need to install the software and how to install them

`Download and Install Latest Node.js version`  
`Download and Install XAMPP and Include Apache and MySQL Mudules`

### Installing
A step by step series of examples that tell you how to get a development env running

`After Downloading the Prerequisites`  
`Fetch the repository`   

To setup the database
* `Open XAMPP`
  * `Start Apache and Mysql`
  * `Go to Mysql Admin`
  * `Create a Database with the name: urls`  
  
Setup connection
* `Go to \Short_Url_Service\server\settings.json`
  * `These are the connectin settings leave everything as it is. If you wish to change them 3 files will be affected:`
  * `\Short_Url_Service\server\settings.json`
  * `\Short_Url_Service\server\app.js`
  * Client side: `\Short_Url_Service\client\short_url\src\services\Api.js`
  
  
To run the client
* `Go to \Short_Url_Service\client\short_url`
  * `Open a Terminal`
  * `Type: npm install`
  * `Type: npm run serve`

To run the server
* `Go to \Short_Url_Service\server`
  * `Open a Terminal`
  * `Type: npm install`
  * `Type: npm start`  

  
## Built With

* Vue.js
* Node.js
* MySQL

## Authors
* *Angjelo Nuho*
