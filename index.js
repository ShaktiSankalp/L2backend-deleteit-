//console.log('chai aur code');

require('dotenv').config()  
const express = require('express')
//import express from 'express'   //same same but difflent

const app = express()

const port = 4000

const githubData = {
    "login": "ShaktiSankalp",
    "id": 119934629,
    "node_id": "U_kgDOByYOpQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/119934629?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ShaktiSankalp",
    "html_url": "https://github.com/ShaktiSankalp",
    "followers_url": "https://api.github.com/users/ShaktiSankalp/followers",
    "following_url": "https://api.github.com/users/ShaktiSankalp/following{/other_user}",
    "gists_url": "https://api.github.com/users/ShaktiSankalp/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ShaktiSankalp/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ShaktiSankalp/subscriptions",
    "organizations_url": "https://api.github.com/users/ShaktiSankalp/orgs",
    "repos_url": "https://api.github.com/users/ShaktiSankalp/repos",
    "events_url": "https://api.github.com/users/ShaktiSankalp/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ShaktiSankalp/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 9,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-12-06T10:23:01Z",
    "updated_at": "2024-01-01T19:01:38Z"
    }

app.get('/',(req,res)=>{
    res.send("Hello world!")
})

app.get('/twitter',(req,res)=>{
    res.send("this is twitter page")
})

app.get('/login',(req,res)=>{
    res.send(`<h1>login page<h1>` )
})

app.get('/github',(req,res)=>{
    res.json( githubData)
})

app.listen(process.env.PORT,()=>{
    console.log(`example app listening on port ${process.env.PORT}`);
})

// app.listen(port,()=>{
//     console.log(`example app listening on port ${port}`);
// })