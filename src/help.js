const help = (prefix, sender, pushname, time) => {

	return `
──────▄▀▄─────▄▀▄
─────▄█░░▀▀▀▀▀░░█▄
─▄▄──█░░░░░░░░░░░█──▄▄
█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█
         ╔═.✵.══════════╗        
                 𝐒𝐇𝐔𝐑𝐄𝐊 𝐁𝐎𝐓☂︎
         ╚══════════.✵.═╝
 

  Olá, ${pushname}! Bem vindo ao menu.

╭────「 INFO 」───────────╮
│                       
│                          
┣⊱ Dono:                       
│Henrique
│                                            
┣⊱ Nmr do Dono: 
│wa.me/5521997112002
│                                            
┣⊱ Seu link:
│wa.me/${sender.split("@")[0]}   
│                                            
┣⊱ Velocidade:           
│${process.uptime()}         
│                                  
┣⊱Data e hora: ${time}                       
│                                            
┣⊱Trabalhando à:    
│${kyun(uptime)}
│
╰───────────────────╯

╭────「 FIGURINHA 」
│
┣⊱  *${prefix}sticker*
│➤ *Uso:* Marcar img ou legenda.
│
┣⊱  *${prefix}attp*
│➤ *Uso:* Faz figu animada com texto.
│
┣⊱  *${prefix}toimg*
│➤ *Uso:* Converte figu em foto
│
┣⊱  *${prefix}tomp3*
│➤ *Uso:* Converte vídeo em áudio
│
╰─────────────
╭────「 INTERAÇÕES 」────
│                      
┣⊱  *${prefix}sn (texto)*          
│➤ *Uso:* Responde Sim ou Não
│
┣⊱  *${prefix}rola*          
│➤ *Uso:* Mede seu pau    
│
┣⊱  *${prefix}chance* (alguma previsão)
│➤ *Uso:* Calcula as chances de algo 
│
┣⊱  *${prefix}top5*        
│➤ *Uso:* Faz um top5
│     
┣⊱  *${prefix}gado*
│➤ *Uso:* Fala o quanto você é gado.
│
┣⊱  *${prefix}morte*  
│➤ *Uso:* Porcentagem de Morte
│
┣⊱  *${prefix}lindos* 
│➤ *Uso:* Faz um rank com os mais lindos do grp.
│
┣⊱  *${prefix}gostosa*
│➤ *Uso:* Marca duas gostosas

┣⊱  *${prefix}cornos* 
│➤ *Uso:* Faz um top com os cornos do grp
│
┣⊱  *${prefix}macaco*
│➤ *Uso:* Rank de macacos
│
┣⊱  *${prefix}lindos*
│➤ *Uso:* Rank de Lindos
│
┣⊱  *${prefix}feios*
│➤ *Uso:* Rank de Feios
│
┣⊱  *${prefix}gays*
│➤ *Uso:* Rank de gays
│
┣⊱  *${prefix}casal*
│➤ *Uso:* Faz um casal entre membros do grp
│
┣⊱  *${prefix}otakus*  
│➤ *Uso:* Rank de otakus
│
┣⊱  *${prefix}pau*  
│➤ *Uso:* *⚓Diferente do !rola*      
│
┣⊱  *${prefix}nazista*
│➤ *Uso:* Porcentagem de Nazismo
│
┣⊱  *${prefix}judeu*
│➤ *Uso:* Porcentagem de Judeu
│
┣⊱  *${prefix}pedofilo*
│➤ *Uso:* Porcentagem de Pedófilo
│
┣⊱  *${prefix}mamaco*
│➤ *Uso:* Macacos do Grupo
│
┣⊱  *${prefix}gados*
│➤ *Uso:* Rank de gados
│
┣⊱  *${prefix}abraço*
│➤ *Uso:* Marque alguém para abraçar
│
┣⊱  *${prefix}sekisu*
│➤ *Uso:* Marque alguém para fazer sexo
│
┣⊱  *${prefix}beijar*
│➤ *Uso:* Marque alguém para beijar
│                      
╰────────────────
╭────「 AUDIOS 」──
│                    
║Ⓢ *${prefix}estourar*
║❗Utilidade-deixa audio estourado
║Ⓢ *${prefix}bass*
║❗Utilidade-efeito bass para audio
║Ⓢ *${prefix}fast*
║❗Utilidade-deixa audio rapido
║Ⓢ *${prefix}gemuk*
║❗Utilidade-deixa audio longo
║Ⓢ *${prefix}esquilo*
║❗Utilidade-voz de esquilo
║Ⓢ *${prefix}slow*
║❗Utilidade-deixa audio lento
║Ⓢ *${prefix}nightcore*
║❗Utilidade-efeito nightcore para audio
│                    
╰────────────────
╭────「 IMAGENS 」──
│                    
┣⊱  *${prefix}boanoite* 
│➤ *Uso:* Imagem de Boa noite
│
┣⊱  *${prefix}bomdia* 
│➤ *Uso:* Imagem de Bom dia
│
┣⊱  *${prefix}boatarde*  
│➤ *Uso:* Imagem de Boa tarde
│
┣⊱  *${prefix}minato*   
│➤ *Uso:* Imagem aleatória do Minato
│
┣⊱  *${prefix}naruto*   
│➤ *Uso:* Imagen aleatória do Naruto
│
┣⊱  *${prefix}pmake*
│➤ *Uso:* Digite seu nome
│e ele faz uma plaquinha
│                    
╰────────────────
╭─「 INTELIGÊNCIA 」
│                         
┣⊱  *${prefix}simih 1*  
│➤ *Uso:* 1 para ativar
│  
┣⊱  *${prefix}simih 0*  
│➤ *Uso:* 0 para desativar
│
┣⊱  *${prefix}simi*  
│➤ *Uso:* Faça uma pergunta ao simi
│                         
╰─────────────────

╭──────「 GRUPO 」──╮
│                   
┣⊱  *${prefix}antilink*
│➤ *Uso:* 1 ativa | 0 desativa
│
┣⊱  *${prefix}antispam*
│➤ *Uso:* 1 ativa | 0 desativa
│
┣⊱  *${prefix}antifake*
│➤ *Uso:* 1 ativa | 0 desativa
│   
┣⊱  *${prefix}abrirgp*
│➤ *Uso:* Abre o grupo
│
┣⊱  *${prefix}fechargp*
│➤ *Uso:* Fecha o grupo
│
┣⊱  *${prefix}add*   
│➤ *Uso:* + Número da pessoa com DDD
│
┣⊱  *${prefix}promover*    
│➤ *Uso:* Promove alguém a ADM / @Marcar
│
┣⊱  *${prefix}rebaixar*
│➤ *Uso:* Tira o ADM de alguém / @Marcar
│
┣⊱  *${prefix}setfoto*
│➤ *Uso:* Muda foto do grp
│
┣⊱  *${prefix}setname*     
│➤ *Uso:* Muda nome do grp
│        
┣⊱  *${prefix}admins*    
│➤ *Uso:* Marca os admins
│    
┣⊱  *${prefix}marcar*              
┣⊱  *${prefix}marcar2*             
┣⊱  *${prefix}marcar3*
│➤ *Uso:* Todos marcam os membros
│
┣⊱  *${prefix}bemvindo*  
│➤ *Uso:* 1 ativa | 0 desativa
│
┣⊱  *${prefix}grupoinfo*            
│➤ *Uso:* Informações do grp
│
┣⊱  *${prefix}setdesc*
│➤ *Uso:* Muda a descrição
│
┣⊱  *${prefix}bug*  
│➤ *Uso:* !bug + o erro
│                          
╰─────────────────╯

╭──「 COMANDOS DE VOZ 」─
│                                 
┣⊱  *${prefix}musica*
┣⊱  *${prefix}msc*
│➤ *Uso:* Mandam o menu de música
│
┣⊱  *${prefix}gtts pt (texto)*  
│➤ *Uso:* Bot manda áudio falando o que vc escreveu    
│
┣⊱  *${prefix}play + nome da msc*
│➤ *Uso:* Pesquisa a música    
│                                 
┣⊱  *${prefix}play1 + nome da msc*
│➤ *Uso:* Pesquisa a música    
│                                 
┣⊱  *${prefix}play2 + nome da msc*
│➤ *Uso:* Pesquisa a música    
│                                 
┣⊱  *${prefix}play3 + nome da msc*
│➤ *Uso:* Pesquisa a música    
│                                 
┣⊱  *${prefix}play4 + nome da msc*
│➤ *Uso:* Pesquisa a música    
│                                 
┣⊱  *${prefix}play5 + nome da msc*
│➤ *Uso:* Pesquisa a música    
│                                 
╰──────────────────\n\n*Créditos:*${prefix}cred`
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var Horas = Math.floor(seconds / (60*60));
  var Minutos = Math.floor(seconds % (60*60) / 60);
  var Segundos = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(Horas)} Horas ${pad(Minutos)} Minutos ${pad(Segundos)} Segundos`
}
}
exports.help = help

