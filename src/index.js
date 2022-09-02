
fetch('http://localhost:3000/feed')
	.then(response => response.json())
	.then(response => { 
		response.forEach(food => {
					document.querySelector('form').addEventListener('submit', (e)=> {
						e.preventDefault()
						//handleSearch(e.target.title.value)
						if (  food.display.displayName.toLowerCase().split(' ').includes(e.target.titleSearch.value.toLowerCase())) {
							const mainDiv = document.createElement('div');
							mainDiv.className = 'main';

							const image = document.createElement('img')
							image.style.height = '430px';
							image.style.length = '430px'
							image.src = food.display.images[0];

							const aboutText = document.createElement('div');
							aboutText.className = 'about-text';

							const heading = document.createElement('h2')
							heading.textContent = food.display.displayName;
							aboutText.appendChild(heading)
							
							food.content.ingredientLines.forEach(ingredient => {
								const p = document.createElement('p');
								p.append(ingredient.ingredient)
								aboutText.appendChild(p)
							}) 

							mainDiv.appendChild(image);
							mainDiv.appendChild(aboutText);
							document.getElementById('about').appendChild(mainDiv)
							
						} 
					}) }) })
					
	.catch(err => console.error(err));








	