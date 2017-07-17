import gql from 'graphql-tag';

export default gql`
 mutation delUser($data: UserProfileDeleteByIdInput!){
    UserProfile{
        UserProfileDeleteById(input: $data){
            clientMutationId
        }
    }
 }
`;
