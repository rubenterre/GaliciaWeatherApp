<script>
import { db } from '../firebase.js'

let nome = ''
let email = ''
let contrasinal = ''
let idUpdate = ''
let users = []
db.collection('users').orderBy('nome','asc').onSnapshot(data=>{
	users = data.docs
})

function addUser(){
	db.collection('users').add({
		nome:nome,
		email:email,
		contrasinal:contrasinal
	})
	nome = ''
	email = ''
	contrasinal = ''
}

function deleteUser(id){
	db.collection('users').doc(id).delete()
}

function enviarForm(x,y,c,z){
	nome = x
	email = y
	contrasinal = c
	idUpdate = z
}

function updateUser(){
	db.collection('users').doc(idUpdate).update({
		nome : nome,
		email : email,
		contrasinal : contrasinal
	})
}
let user = {}
function userById(id){
	db.collection('users').doc(id).onSnapshot(data =>{
		user = data.data()
		console.log(user.nome)
	})
}

</script>
<div class="container">
	<input type="hidden" bind:value={idUpdate}>
	<input type="text" placeholder="Nombre" bind:value={nome}>
	<input type="text" placeholder="Email" bind:value={email}>
	<input type="text" placeholder="Contrasinal" bind:value={contrasinal}>
	<button class="btn blue" on:click={addUser} >Guardar</button>
	<button class="btn green" on:click={updateUser} >Actualizar</button>

	<table>
		<th>Id</th>
		<th>Nome</th>
		<th>Email</th>
		<th>Contrasinal</th>
		<th>Eliminar</th>
		<th>Editar</th>
		<th>Enviar ID</th>
		{#each users as item}
			 <tr>
			 	 <td>{item.id}</td>
				 <td>{item.data().nome}</td>
				 <td>{item.data().email}</td>
				 <td>{item.data().contrasinal}</td>
				 <td><button class="btn red" on:click={deleteUser(item.id)} >Eliminar</button></td>
				 <td><button class="btn orange" on:click={enviarForm(item.data().nome,item.data().email,item.data().contrasinal,item.id)} >Editar</button></td>
				 <td><button class="btn cyan" on:click={userById(item.id)} >Enviar ID</button></td>
			 </tr>
		{:else}
			<tr>
				<td colspan="6" >
					<p>No hay datos en firestore</p>
				</td>
			</tr>
		{/each}
	</table>
</div>