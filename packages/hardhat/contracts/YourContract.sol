//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract YourContract {   
    // Struct to store car details
    struct Car {
        string description;
        uint basePrice; // in wei (ETH)
        address owner;
    }
    
    // Struct to store user details
    struct User {
        string name;
        string email;
    }
    
    // Struct for auction details
    struct Auction {
        string description;
        uint basePrice;
        uint endTime;
        address highestBidder;
        uint highestBid;
        bool ended;
    }
    
    // Struct for bids
    struct Bid {
        address bidder;
        uint amount;
    }

    // Mappings to store data
    mapping(address => User) public users;
    mapping(address => Car) public carsForSale;
    mapping(address => Auction) public auctions;
    mapping(address => Bid[]) public auctionBids; // list of bids for each auction

    // Register user
    function registerUser(string memory _name, string memory _email) public {
        users[msg.sender] = User(_name, _email);
    }

    // Add a car for sale
    function sellCar(string memory _description, uint _basePrice) public {
        carsForSale[msg.sender] = Car(_description, _basePrice, msg.sender);
    }

    // Buy a car
    function buyCar(address _seller) public payable {
        require(msg.value >= carsForSale[_seller].basePrice, "Insufficient funds");
        User memory buyer = users[msg.sender];
        // Logic to transfer car ownership or trigger other processes
    }

    // Start an auction
    function startAuction(string memory _description, uint _basePrice, uint _duration) public {
        auctions[msg.sender] = Auction(
            _description, 
            _basePrice, 
            block.timestamp + _duration, 
            address(0), 
            0, 
            false
        );
    }

    // Place a bid on an auction
    function placeBid(address _auctioneer) public payable {
        Auction storage auction = auctions[_auctioneer];
        require(block.timestamp < auction.endTime, "Auction has ended");
        require(msg.value > auction.highestBid, "Bid is not higher than current highest");

        auctionBids[_auctioneer].push(Bid(msg.sender, msg.value));

        auction.highestBid = msg.value;
        auction.highestBidder = msg.sender;
    }

    // End an auction and declare the winner
    function endAuction(address _auctioneer) public {
        Auction storage auction = auctions[_auctioneer];
        require(block.timestamp >= auction.endTime, "Auction not yet ended");
        require(!auction.ended, "Auction already ended");

        auction.ended = true;
        // Transfer car ownership and funds logic
    }

    // Get auction bids (returns all bids with their names)
    function getAuctionBids(address _auctioneer) public view returns (Bid[] memory) {
        return auctionBids[_auctioneer];
    }

    // Get maximum bid and bidder's name for a specific auction
    function getHighestBidderInfo(address _auctioneer) public view returns (address, uint, string memory) {
        Auction memory auction = auctions[_auctioneer];
        string memory bidderName = users[auction.highestBidder].name;
        return (auction.highestBidder, auction.highestBid, bidderName);
    }
}
