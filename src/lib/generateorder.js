const config = {
	maxOrderlength: 5,
	minOrderlength: 1,
	singleItemMaxAmount: 4,
	singleItemMinAmount: 1,
	Itemlist: [
		"Big Mac",
		"Quarter Pounder",
		"JrChicken",
		"McChicken",
		"SPCYMcChicken",
		"McCrispy",
		"McCrispy SPC",
		"McCrispy HON",
		"McCrispy HONSPC",
		"Cheese Burger",
		"Milk",
		"Chocolate Milk",
		"SNACKCMilkshake",
		"SCMilkshake",
		"MCMilkshake",
		"LCMilkshake",
		"SSTRAWMilkshake",
		"MSTRAWMilkshake",
		"LSTRAWMilkshake",
		"SVMilkshake",
		"MVMilkshake",
		"LVMilkshake",
		"4PC NUGGETS",
		"6PC NUGGETS",
		"10PC NUGGETS",
		"20PC NUGGETS",
		"40PC NUGGETS",
		"Poutine",
		"HB Fries",
		"LFries",
		"MFries",
		"LFries",
		"SCup",
		"MCup",
		"LCup",
		"Filet",
		"DFillet",
		"DBLBigMac",
		"Bag",


	],
	OrderTypes: ["DT", "Bag", "Tray", "MDS"],
	OrderStorage: ["Paid", "Stored"],
};

function generateNumber() {
	return Math.floor(Math.random() * (16 - 5) + 5);
}

function generateOrder() {
	const duplicateChecker = [];
	const orderAmount = Math.floor(
		Math.random() * (config.maxOrderlength - config.minOrderlength) +
			config.minOrderlength
	);
	const orderArray = [];
	for (let i = 0; i < orderAmount; i++) {
		let ItemRandomizer = Math.floor(Math.random() * config.Itemlist.length);
		//Prevent duplicate items
		while (duplicateChecker.includes(ItemRandomizer)) {
			ItemRandomizer = Math.floor(Math.random() * config.Itemlist.length);
		}
		duplicateChecker.push(ItemRandomizer);

		const singleItemAmount = Math.floor(
			Math.random() *
				(config.singleItemMaxAmount - config.singleItemMinAmount) +
				config.singleItemMinAmount
		);
		orderArray.push({
			name: config.Itemlist[ItemRandomizer],
			amount: singleItemAmount,
		});
	}
	const randomCode = `R${generateNumber()}-${generateNumber()}`;
	const randomTime = Math.floor(Math.random() * (360 - 60) + 60);
	return {
		timeGenerated: Math.floor(Date.now() / 1000),
		randomCode,
		randomTime,
		orderArray,
		orderType:
			config.OrderTypes[Math.floor(Math.random() * config.OrderTypes.length)],
		orderStorage:
			config.OrderStorage[
				Math.floor(Math.random() * config.OrderStorage.length)
			],
	};
}
export default generateOrder;
