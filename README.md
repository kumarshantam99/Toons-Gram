# Toons-Gram

A social media App for users to show-off and learn about Cartoons and Anime.

MERNG stack to be used here:

Index.js file: My server file, I have called apollo-server because Apollo useless GraphQL sitting on top of an Express server. Mongoose is being used to communicate with our mongodb which will ultimately be overlooked by GraphQL. 
Initializing the server requires two inputs:
Type definitions: in this file I have defined the GraphQL schema that contains the blueprint of all the server side object instances and functions that will govern my app’s functionality.
Resolvers: Resolvers tell Apollo Server how to fetch the data associated with a particular type. 

GraphQL: A query language sitting on top of the back-end. It helps us to efficiently handle API requests and responses by getting back only what is required from the server, thus reducing bandwidth usgae and latency time.
