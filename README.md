# API Calls, Their Uses, Syntax and Examples:
All requests are **GET** requests.

* http://ekaone.herokuapp.com/admin/issueTender?tenderID=12&tender=Example
  This API is for creating a new tender by the admin.
  Returns: A JSON object of the form `{success: true}`, if creation was successful.

* http://ekaone.herokuapp.com/vendor/applyTender?tenderID=12
  This API is for the vendor to apply to a tender issued by the admin.
  Returns: A JSON object of the form `{success: true}`, if operation was successful.

* http://ekaone.herokuapp.com/admin/approveTender?tenderID=12
  This API is for the admin to approve the tenders that the vendor applied for.
  Returns: A JSON object of the form `{success: true}`, if operation was successful.

* http://ekaone.herokuapp.com/admin/viewAllTenders
  http://ekaone.herokuapp.com/vendor/viewAllTenders
  Returns: A JSON object of the form `{Issued: IssuedTenders, Applied: AppliedTenders, Approved: Approved_Tenders}`.
  containing all the tenders.

* http://ekaone.herokuapp.com/admin/viewAppliedTenders
  http://ekaone.herokuapp.com/vendor/viewAppliedTenders
  Returns: A JSON object of the form `{Applied: AppliedTenders}` containing all the 
  tenders applied by the vendor.
  On similar lines, the following APIs have been implemented:
  http://ekaone.herokuapp.com/admin/viewIssuedTenders
  http://ekaone.herokuapp.com/vendor/viewIssuedTenders
  http://ekaone.herokuapp.com/admin/viewApprovedTenders
  http://ekaone.herokuapp.com/vendor/viewApprovedTenders

* http://ekaone.herokuapp.com/stock
  Returns: A JSON object of the form `{stock: stock_value}`.

* http://ekaone.herokuapp.com/sensor
  Returns: A JSON object of the form `{sensor: sensor_value}`.

-----------------------------------------------------------------------------------------------------
Though the following APIs are not required by the frontend in either the webapp or the Android app,
we are still mentioning it, for the sake of completeness. This will be used in the Raspberry Pi codes.

* http://ekaone.herokuapp.com/stock_update?stock=34.5
  Returns: A JSON object of the form `{stock: stock_value}`.

* http://ekaone.herokuapp.com/sensor_update?sensor=54.7
  Returns: A JSON object of the form `{sensor: sensor_value}`.

