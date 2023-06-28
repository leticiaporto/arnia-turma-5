const parametros = window.location.search
console.log(parametros)
const parametrosObjeto = new URLSearchParams(parametros)
const id = parametrosObjeto.get('id')
const nome = parametrosObjeto.get('nome')
console.log(id, nome)