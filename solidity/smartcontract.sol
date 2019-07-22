pragma solidity >=0.4.22 < 0.7.0;

contract ProductContract {
    uint8 total; // 총 제품의 수

    struct myStruct {
        uint   id;
        string productName;
        string locaton;
        uint timestamp;
    }

    event product (
        uint id,
        string productName,
        string location,
        uint timestamp
    );

    myStruct[] public products;

    /* 사용자가 입력한 제품을 등록 */
    function addProduct (uint _id, string memory _firstString, string memory _secondString) public {
        products.push(myStruct(_id, _firstString, _secondString, block.timestamp));
        total++;
        emit product(_id, _firstString, _secondString, block.timestamp);
    }

    /* 번호에 해당하는 제품의 이름을 리턴 */
    function getProduct(uint _idx) public view returns (uint, string memory, string memory, uint) {
        return (products[_idx].id, products[_idx].productName, products[_idx].locaton, products[_idx].timestamp);
    }

    /* 제품 등록의 수를 리턴 */
    function getTotal() public view returns(uint8) {
        return total;
    }
}