import React from 'react'

// accept props here
const List = (props) => {
	const { people } = props
	// Map over prop "people" and code the right structure

	return (people.map((person) => {
		const { id, name, age, image } = person
		return (
           <article class="person">
	<img src={person.image} alt={person.name} />
	<div>
		<h4>{person.name}</h4>
		<p>{person.age}</p>
	</div>
</article>
	})
    ))
}

export default List
