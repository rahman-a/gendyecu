import clientActions from './clientAction'
import courseActions from './courseAction'
import blogAction from './blogAction'
import productAction from './productAction'
import contactAction from './contactAction'
import contentAction from './contentAction'

const actions = {
  client: clientActions,
  courses: courseActions,
  blogs: blogAction,
  products: productAction,
  contact: contactAction,
  content: contentAction,
}

export default actions
