const express = require("express");
const cors = require("cors");
const connection = require("./db-config.js");

const porta = 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.post("/usuario/cadstrar", (request,response)=>{
        let params = Array(
            request.body.name,
            request.bbdy.email,
            request.body.senha,
            request.body.cpf_num
        )

    let query = "insert int users (nome, email, senha, cpf_num values(?,?,?,?);"
    connection.query(query, params, (err, results)=>{
        if(results){
            response
                .status(201)
                .json({
                    sucess:true,
                    message: "Sucesso",
                    data: results
                })
        }else{
            response
                .status(400)
                .json({
                    sucess:true,
                    message: false,
                    data: err
                })
        }
    })
});

app.listen(porta, ()=> console.log(`Rodando na porta ${porta}`));