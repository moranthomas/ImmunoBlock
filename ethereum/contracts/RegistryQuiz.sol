pragma solidity ^0.5.7;


contract RegistryQuiz {

    function signup(string memory _userDid, uint256 _role) public {
        // associate msg.sender with user did
        // sign with uport did
        // setup a role
    }

    function givePermissions(string memory _toDid) public {
        // get the current did from the given msg.sender
        // and give permissions to _toDid
    }

    function hasQuiz(string memory _userDid) public view returns (bool) {
        // verify if a given user already upload a
    }

    function getQuiz(string memory _userDid) public view returns (bool) {
        // verify if it's the right user getting the file
        // return file path
    }

    function uploadQuiz(string memory _userDid, string memory _quizFilePath) public {
        // upload file with encrypted path
    }

    function acessPatientQuiz(string memory _userDid, string memory _patientDid) public view returns (string memory) {
        // verify permissions
        // register that userDid saw the file
        // return the file path
    }
}
