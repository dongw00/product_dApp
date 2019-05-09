pragma solidity >=0.4.22 <0.7.0;

contract ProductContract {
    uint8 numberOfProducts; // 총 제품의 수

    struct myStruct {
        uint   number;
        string productName;
        string locaton;
        uint timestamp;
    }

    event product (
        uint number,
        string productName,
        string location,
        uint timestamp
    );

    myStruct[] public products;

    /* 사용자가 입력한 제품을 등록 */
    function addProStru (uint _initNumber, string memory _firstString, string memory _secondString) public {
        products.push(myStruct(_initNumber, _firstString, _secondString, block.timestamp)) -1;
        numberOfProducts++;
        emit product(_initNumber, _firstString, _secondString, block.timestamp);
    }

    /* 제품 등록의 수를 리턴 */
    function getNumOfProducts() public view returns(uint8) {
        return numberOfProducts;
    }

    /* 번호에 해당하는 제품의 이름을 리턴 */
    function getProductStruct(uint _index) public view returns (uint, string memory, string memory, uint) {
        return (products[_index].number, products[_index].productName, products[_index].locaton, products[_index].timestamp);
    }
}