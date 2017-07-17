import gql from 'graphql-tag';

export default gql`
 mutation  createUser($userData: JSON){
  UserProfile{
    UserProfileCreate(input: {data: $userData}){
 		obj{
 		    id	
 		}
    }
    
  }
  
}
`;
