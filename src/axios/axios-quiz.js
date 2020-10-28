import axios from 'axios'

export default axios.create({
	baseURL: 'https://react-quiz-4c50d.firebaseio.com/'
})