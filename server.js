// server.js
// Servidor Express minimalista com rota GET / que responde &quot;Hello CI/CD!&quot;
const express = require(&#39;express&#39;);
const app = express();
const PORT = process.env.PORT || 3000;
// Rota principal: responde com texto simples para verificarmos nos testes
app.get(&#39;/&#39;, (req, res) =&gt; {
res.send(&#39;Hello CI/CD!&#39;);
});
// Inicia o servidor na porta definida
app.listen(PORT, () =&gt; {
console.log(`Servidor rodando na porta ${PORT}`);
});
