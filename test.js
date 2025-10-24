// test.js
// Teste simples: realiza GET em localhost:3000/ e verifica a resposta
const http = require(&#39;http&#39;);
const assert = require(&#39;assert&#39;);
const options = {
hostname: &#39;localhost&#39;,
port: 3000,
path: &#39;/&#39;,
method: &#39;GET&#39;
};
const req = http.request(options, (res) =&gt; {
let data = &#39;&#39;;
res.on(&#39;data&#39;, chunk =&gt; data += chunk);
res.on(&#39;end&#39;, () =&gt; {
try {
// Compara o body retornado com o texto esperado
assert.strictEqual(data, &#39;Hello CI/CD!&#39;);

console.log(&#39;✅ TESTE PASSOU: resposta correta!&#39;);
process.exit(0); // sucesso
} catch (err) {
console.error(&#39;❌ TESTE FALHOU:&#39;, err.message);
process.exit(1); // falha
}
});
});
req.on(&#39;error&#39;, (e) =&gt; {
console.error(&#39;❌ ERRO NO TESTE:&#39;, e.message);
process.exit(1);
});
req.end();
