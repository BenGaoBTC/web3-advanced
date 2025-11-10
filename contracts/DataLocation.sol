// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title Demonstrates data locations in Solidity: storage, memory, calldata
/// @author Ben
/// @notice For educational and testing purposes
contract DataLocation {
    string public stored = "Hello storage";

    /// @notice Demonstrates how memory variables are temporary
    /// @param _temp A temporary string variable
    function changeMemory(string memory _temp) public pure returns (string memory) {
        _temp = "Modified memory";
        return _temp;
    }

    /// @notice Demonstrates how storage variables persist on-chain
    function changeStorage() public {
        stored = "Modified storage";
    }

    /// @notice Demonstrates calldata as a read-only input
    /// @param _msg External input passed as calldata
    /// @return The same message back
    function readCalldata(string calldata _msg) public pure returns (string memory) {
        return _msg;
    }
}
