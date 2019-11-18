pragma solidity >=0.4.22 < 0.7.0;

contract ProductContract {
    uint total;
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
    function addProduct (uint _id, string memory _productName, string memory _location) public {
        products.push(myStruct(_id, _productName, _location, block.timestamp));
        emit product(_id, _productName, _location, block.timestamp);
    }

    /* 번호에 해당하는 제품의 이름을 리턴 */
    function getProduct(uint _idx) public view returns (uint, string memory, string memory, uint) {
        return (products[_idx].id, products[_idx].productName, products[_idx].locaton, products[_idx].timestamp);
    }

    function getTotal() public view returns (uint) {
        return total;
    }
}