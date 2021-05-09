import {
    GET_ARTICLELIST_SUCCESS
  } from "../actions/types";

  const initialState = {
    keywords: "",
    country: "",
    language: "English",
    articles: []
  };

export const articleListReducer = (state = initialState, action) => {
  console.log("reducer")
    switch (action.type) {
      case GET_ARTICLELIST_SUCCESS:
        return {
          ...state,
          keywords: action.payload.keywords,
          articles: [
            {title:"What are microservices?" , link:"https://microservices.io/"},
            {title:"Microservices" , link:"https://martinfowler.com/articles/microservices.html"},
            {title:"Microservices" , link:"https://martinfowler.com/articles/microservices.html"},
            {title:"Microservices Definition" , link:"https://avinetworks.com/glossary/microservice/"},
            {title:"Microservices" , link:"https://en.wikipedia.org/wiki/Microservices"},
            {title:"What is Microservices?" , link:"https://smartbear.com/solutions/microservices/"},
            {title:"What are Microservices? Code Examples, Best Practices, Tutorials and More" , link:"https://stackify.com/what-are-microservices/"},
            {title:"Microservices" , link:"https://spring.io/microservices"},
            {title:"The What, Why, and How of a Microservices Architecture" , link:"https://medium.com/hashmapinc/the-what-why-and-how-of-a-microservices-architecture-4179579423a9"},
            {title:"What are microservices?" , link:"https://www.redhat.com/en/topics/microservices/what-are-microservices"},
          ]
      };

        default:
        return state
    }
}