module.exports = {
	core: {
		Batch: require("./src/Batch"),
		ClientBuilder: require("./src/ClientBuilder"),
		SharedCredentials: require("./src/SharedCredentials"),
		StaticCredentials: require("./src/StaticCredentials"),
		Errors: require("./src/Errors"),
	},
	usStreet: {
		Lookup: require("./src/us_street/Lookup"),
		Candidate: require("./src/us_street/Candidate")
	},
	usZipcode: {
		Lookup: require("./src/us_zipcode/Lookup"),
		Result: require("./src/us_zipcode/Result")
	},
	usAutocomplete: {
		Lookup: require("./src/us_autocomplete/Lookup"),
		Suggestion: require("./src/us_autocomplete/Suggestion")
	},
	usExtract: {
		Lookup: require("./src/us_extract/Lookup"),
		Result: require("./src/us_extract/Result")
	},
	internationalStreet: {
		Lookup: require("./src/international_street/Lookup"),
		Candidate: require("./src/international_street/Candidate")
	},
};