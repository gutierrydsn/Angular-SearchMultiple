<html>
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" crossorigin="anonymous">
	<head>
	
	<body style="padding-left:5%;padding-right:10%">
		<h1>Filtro Multiplos</h1>
			Ao desenvolver consultas pode ser que em algum momento exista a necessidade de ter uma consulta 
			onde exista uma combinação de campos. Nativamente o angular não permite isso com seu filtro padrão, 
			ao se definir filtros encadeados o resultado do primeiro filtro será a entrada para o segundo filtro e assim consecutivamente.
			Então como combinar filtros, fazer com que o resultado do primeiro filtro seja concatenado com o resultado do segundo filtro 
			onde o segundo filtro seja executado sobre o array original?				
		
		<br><br>
		
			Para resolver essa necessidade foi criado o searchMultiple, o searchMultiple é uma biblioteca que permite definir filtros combinados.
			Seu uso é extramente fácil, sua sintaxe é semelhante ao filter padrão do angular a diferença que pode se adicionar mais campos a serem filtrados. 
			<br> Exemplo:
			<br> searchMultiple:{campo1:consulta1, campo2:consulta2}
		
		<br><br>
		<a class="list-group-item active">DEMONSTRAÇÂO DE USO</a>
			
		<iframe width='100%' height='100%' frameborder='0' src='example\usingSearchMultiple.html'></iframe>
			
		
	</body>

</html>