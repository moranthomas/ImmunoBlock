pragma solidity ^0.5.7;


contract RegistryQuiz {

    function signup(string memory userDid, uint256 _role) public {
        // associate msg.sender with user did
        // sign with uport did
        // setup a role
    }

    function givePermissions(string memory _toDid) public {
        // get the current did from the given msg.sender
        // and give permissions to _toDid
    }

    function uploadQuiz(string memory userDid, string memory _quizFilePath) public {
        // upload file with encrypted path
    }

    function getQuiz(string memory userDid, string memory patientDid) public view returns (string memory) {
        // verify permissions
        // register that userDid saw the file
        // return the file path
    }
}
