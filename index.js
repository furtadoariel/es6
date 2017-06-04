class Message {
  constructor(text =  '', created = Date.now()){
    this.text = text;
    this.created = created;

  }
  get created(){
    return this._created;
  }

  set created(created){
    if(!created || isNaN(created)){
      throw new Error('Data invalida');
    }
    else{
      this._created = created;
    }
  }

  toString(){
    return `Mensagem criada as: ${this.created} - Texto: ${this.text}`;
  }
}
class imageMessage extends Message{
  constructor(text = '', created = Date.now(), url = '', thumbnail = ''){
    super(text, created);
    this.url = url;
    this.thumbnail = thumbnail;
  }

  toString(){
    return `Photo${super.toString()}` +
    `-url ${this.url}` +
    `thumbnail ${this.thumbnail}`;
  }
}

var emptyMessage = new Message();
var emptyText = new Message('teste', Date.now());
var image = new imageMessage('teste Imagem', Date.now(), 'www', 'eu e tu');
console.log(String(emptyMessage));
console.log(String(emptyText));
console.log(String(image));