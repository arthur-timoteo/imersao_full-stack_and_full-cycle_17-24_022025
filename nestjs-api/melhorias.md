- validação das requests
- validação com websockets
- autenticação na api e no next.js
- user event driven para atualizar o saldo
- separar a finalização da ordem, da atualização do saldo do ativo
- criar event socket para atualizar o saldo do ativo na carteira
- criar um notification no next.js + websocket para mostrar quando uma ordem foi executada
- criar um saldo em reais para carteira
- usar cache do lado servidor para consultar ativos e orders com preço fixo depois do horário de negociação
- evitar que o websocket envie notificações se não houverem clientes
- evitar que usuário não pertencente as orders de se enscrver no websocket de notificações daquela order
- reprocessamento da finalização das orders em caso de falha
- se for venda, verificar se o saldo é suficiente
- testes