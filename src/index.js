document.getElementById('about').style.display = 'none';

fetch('https://maureenmurugi.github.io/db.json')
	.then(response => response.json())
	.then(response => { 
		response.feed.forEach(food => {
					document.querySelector('form').addEventListener('submit', (e)=> {
						e.preventDefault()
						//handleSearch(e.target.title.value)
						if (  food.display.displayName.toLowerCase().split(' ').includes(e.target.titleSearch.value.toLowerCase())) {
							const mainDiv = document.createElement('div');
							mainDiv.className = 'main';

							const image = document.createElement('img')
							image.style.height = '400px';
							image.style.width = '400px'
							image.src = food.display.images[0];

							const aboutText = document.createElement('div');
							aboutText.className = 'about-text';

							const heading = document.createElement('h2')
							heading.style.fontSize = '30px'
							heading.style.color = 'yellowgreen'
							heading.textContent = food.display.displayName;
							aboutText.appendChild(heading)
							
							food.content.ingredientLines.forEach(ingredient => {
								const p = document.createElement('p');
								p.style.fontSize = '25px'
								p.style.color = 'white'
								p.append(ingredient.ingredient)
								aboutText.appendChild(p)
							}) 

							mainDiv.appendChild(image);
							mainDiv.appendChild(aboutText);
							document.getElementById('about').appendChild(mainDiv)

							document.getElementById('about').style.display = 'block'
							
						} 
					})  }) })
					
	.catch(err => console.error(err));

	document.getElementsByClassName('button').addEventListener('click', (e) => {
		e.alert("You chose a healthy meal!")

	})








	