var db = require('../../../database/mysqlConnection');
 
var DeniedPayment = {
	get: function(id,callback){
		return db.query("SELECT t.id as transactionId, ta.approvingMemberId as transactionApprovalMemberId, b.id as budgetEntryId, pl.id as priceListEntryId, ii.id as inventoryItemId, s.id as stageId, p.id as projectId, s.name as stageName, s.description as stateDescription, p.name as projectName,p.address as projectAddress, pl.unitPrice as budgetedUnitPrice, t.unitPrice as unitPrice, t.noOfUnits as ammount, ii.name as itemName, ii.description as itemDescription, t.date as createdDate, ta.date as approvedDate, ta.approved, ta.denied from Transaction as t INNER JOIN TransactionApproval as ta on t.id = ta.transactionId INNER join BudgetEntry as b on t.BudgetEntryId = b.id inner join PriceListEntry as pl on pl.id = b.inventoryItemId inner join InventoryItem as ii on ii.id = pl.InventoryItemId inner join stage as s on b.stageId = s.id inner join Project as p on s.projectId = p.id where t.createdEmployeeId = ? and ii.material = false",[id],callback);
	}
 };
 
 module.exports = DeniedPayment