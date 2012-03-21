

/** @classDescription This is the data map used when a user decides to edit data */
var dataMap = {
		/** 
		 * Each attribute has 2 options: meta, name
		 * <br/>&nbsp;&nbsp;&nbsp;meta - boolean True to be displayed on window popup.
		 * <br/>&nbsp;&nbsp;&nbsp;name - string Name to be displayed on window popup.
		 * @class 
		 * @see https://developers.google.com/fusiontables/docs/developers_reference#reserved
		 */
		header : {
			/** 
			 * The unique line id.
			 */
			LineID:{
				/** True to show in map pop-up, False otherwise */
				meta:false},
			/** 
			 * FROM
			 */
			FROM_:{
				/** True to show in map pop-up, False otherwise */
				meta:true,
				/** The display name for forms */
				name:'From'},
			/** TO */
			TO_:{
				/** True to show in map pop-up, False otherwise */
				meta:true,
				/** The display name for forms */
				name:'To'},
			/** WIDTH */
			WIDTH:{
				/** True to show in map pop-up, False otherwise */
				meta:true,
				/** The display name for forms */
				name:'Width'},
			/** LENGTH */
			LENGTH:{
				/** True to show in map pop-up, False otherwise */
				meta:true,
				/** The display name for forms */
				name:'Length'},
			/** SURVEY */
			SURVEY:{
				/** True to show in map pop-up, False otherwise */
				meta:true,
				/** The display name for forms */
				name:'Survey'},
			/** UPDATED_BY */
			UPDATED_BY_:{
				/** True to show in map pop-up, False otherwise */
				meta:false,
				/** The display name for forms */
				name:'Updated By'},
			/** UPDATED_DATE */
			UPDATED_DATE_:{
				/** True to show in map pop-up, False otherwise */
				meta:false,
				/** The display name for forms */
				name:'Updated Date'},
			/** BRANCH */
			BRANCH:{
				/** True to show in map pop-up, False otherwise */
				meta:true,
				/** The display name for forms */
				name:'Branch'},
			/** SECTION */
			SECTIONID:{
				/** True to show in map pop-up, False otherwise */
				meta:true,
				/** The display name for forms */
				name:'Section'},
			/** SAMPLE */
			SAMPLE:{
				/** True to show in map pop-up, False otherwise */
				meta:true,
				/** The display name for forms */
				name:'Sample'},
			/** PCI */
			PCI:{
				/** True to show in map pop-up, False otherwise */
				meta:true,
				/** The display name for forms */
				name:'PCI'},
			//'geometry':'',
			//'COMMENT':'',
			/** tableID */
			tableID:{
				/** True to show in map pop-up, False otherwise */
				meta:false}
		},
		/**
		 * The data entries options for field engineers
		 * @class
		 */
		data : {
			/** ALLIGATORING */
			ALLIG : {
				/** The code value for option */
				code : 1,
				/** The display name for option */
				name : 'Alligator Cracking'
			},
			/** BLEEDING */
			BLEED : {
				/** The code value for option */
				code : 2,
				/** The display name for option */
				name : 'Bleeding'
			},
			/** BLOCK CRACKING */
			BLOCK : {
				/** The code value for option */
				code : 3,
				/** The display name for option */
				name : 'Block Cracking'
			},
			/** BUMP AND SAGS */
			BUMP : {
				/** The code value for option */
				code : 4,
				/** The display name for option */
				name : 'Bumps and Sags'
			},
			/** CORRUGATION */
			CORRU : {
				/** The code value for option */
				code : 5,
				/** The display name for option */
				name : 'Corrugation',
			},
			/** DEPRESSIONS */
			DEPRE : {
				/** The code value for option */
				code : 6,
				/** The display name for option */
				name : 'Depression',
			},
			/** EDGE CRACKING */
			EDGE : {
				/** The code value for option */
				code : 7,
				/** The display name for option */
				name : 'Edge Cracking',
			},
			/** JT REFLECTION CRACKING */
			REFLE : {
				/** The code value for option */
				code : 8,
				/** The display name for option */
				name : 'Jt. Reflection Cracking'
			},
			/** LANE/SHOULDER DROP OFF */
			LANE : {
				/** The code value for option */
				code : 9,
				/** The display name for option */
				name : 'Lane/Shoulder Drop Off'
			},
			/** LONG and TRANS CRACKING */
			LONG : {
				/** The code value for option */
				code : 10,
				/** The display name for option */
				name : 'Long &amp; Trans Cracking'
			},
			/** PATCH and UTIL CUT PATCHING */
			PATCH : {
				/** The code value for option */
				code : 11,
				/** The display name for option */
				name : 'Patch &amp; Util Cut Patching'
			},
			/** POLISHED AGGREGATE */
			POLIS : {
				/** The code value for option */
				code : 12,
				/** The display name for option */
				name : 'Polished Aggregate'
			},
			/** POTHOLES COUNT */
			POTHO : {
				/** The code value for option */
				code : 13,
				/** The display name for option */
				name : 'Potholes Count',
			},
			/** RAILROAD CROSSING */
			RRCRO : {
				/** The code value for option */
				code : 14,
				/** The display name for option */
				name : 'Railroad Crossing'
			},
			/** RUTTING */
			RUTT : {
				/** The code value for option */
				code : 15,
				/** The display name for option */
				name : 'Rutting'
			},
			/** SHOVING */
			SHOV : {
				/** The code value for option */
				code : 16,
				/** The display name for option */
				name : 'Shoving'
			},
			/** SLIPAGE CRACKING */
			SLIP : {
				/** The code value for option */
				code : 17,
				/** The display name for option */
				name : 'Slippage Cracking'
			},
			/** SWELL */
			SWELL : {
				/** The code value for option */
				code : 18,
				/** The display name for option */
				name : 'Swell'
			},
			/** WEATHERING/RAVELLING */
			WEATH : {
				/** The code value for option */
				code : 19,
				/** The display name for option */
				name : 'Weathering/Ravelling'
			},
		},
	};
	
/**
 * @classDescription A wrapper for all functions
 */
var main = {
		/**
		 * Use this to get permissions granted for a user
		 */
		login2 : function(){

			var temp = window.location.pathname.split('/');
			temp.pop();
			temp = temp.join('/');


			var url = 'https://accounts.google.com/o/oauth2/auth' + '?' + $.param({
				client_id: '835005776639-foc29sd2tkhn7rd5drlgvfgg1f36uj9m.apps.googleusercontent.com',
				response_type: 'token',
				redirect_uri: 'http://'+document.domain + temp + '/callback.php',
				scope: 'https://www.googleapis.com/auth/fusiontables'
			});
			document.location.href=url;
		},

		/** 
		 * JQuery reference to the navigation 
		 * @type JQuery
		 */
		$navs: null,
		
		/** 
		 * Reference to the most recently clicked navigation tab. 
		 * @type JQuery
		 */
		$current: null,
		
		/**
		 * Reference to the map container
		 * @type JQuery
		 */
		$mapWrapper: null,
		
		/**
		 * Log errors.  If true error console will be displayed.  Or
		 * you can append to url '#logger=true'
		 * @type boolean
		 */
		errors : false,
		
		/**
		 * Reference to logger DOM object
		 * @type JQuery
		 */
		$logger : null,
		
		/**
		 * Log Error
		 * @function
		 * @param {string} scope What function error happened in.
		 * @param {string} msg The message
		 */
		logger:function(scope,msg){
			if(!main.errors) return;
			
			if(typeof msg != 'string') msg = String(msg);
				
			main.$logger.append('<div>'+scope+'<div/>');
			var temp = $(document.createElement('div')).html(msg).css({'color':'red','padding-left':'40px'});
			main.$logger.append(temp);
		},
		
		/**
		 * Creates the navigation and binds most events.
		 * @function
		 */
		init:function(){
			var obj = this;
			
			if(obj.errors || document.location.href.indexOf('#logger=true') > 0){
				main.errors = true;
				main.$logger = $('#log');
				main.$logger.show();
			}
			
			obj.$navs = $('#navigation li');
			obj.$current = $('#map');
			obj.$mapWrapper = $('#map-sub-container');
			
			//main navigation
			obj.$navs.filter(':not(.ignore)').click(function(){
				
				var $local = $(this);
				obj.$current = $(this);
				
				$('#'+obj.$navs.filter('.active').attr('id')+'-container').hide();
				
				$('#'+$local.attr('id')+"-container").show();
				
				if($local.attr('id') == "map"){
					//the map may not have rendered, so just hide error
					try{
						google.maps.event.trigger(obj.map, 'resize');
					}catch(e){
						//do nothing
					}
				}
				
				obj.$navs.removeClass('active');
				$local.addClass('active');
				
				obj.saveState.call(obj);
				
			});
			
			//bind login tab click event
			$('#login').click(function(){
				$('#login-msg').hide();
			});
			
			//bind data tab click
			$('#data').click(function(){
				$('#data-msg').hide();
			});
			
			//specific click event for #pending
			$('#pending').click(function(){
				$('#pending-msg').hide();
				main.htmlShowPendingChanges();
			});
			//pending delete event
			$('#pending-delete').click(function(){
				main.htmlPendingDelete();
			});
			//pending push event
			$('#pending-push').click(function(){
				main.htmlPendingPush();
			});

			//set the login and bind to the login button
			main.setLogin();
			$('#login-form-button').click(function(){
				main.doLogin();
			});
			$('#logout-form-button').click(function(){
				main.logout();
			});
			
			//add new data entries
			$('#data-data-add').click(obj.htmlAddRecord);
			
			//save updated data entries
			$('#data-data-save').click(obj.htmlSaveRecord);
			
			//build HTML list
			this.$htmlDD = $(document.createElement('select')).addClass('round');
			for(var x in dataMap.data){
				var $temp = $(document.createElement('option'));
				$temp.val(dataMap.data[x].code).html(dataMap.data[x].name);
				this.$htmlDD.append($temp);
			}
			
			//build the Delete button
			this.$htmlDelete = $(document.createElement('input'))
				.attr('class','round btn')
				.val('Delete').attr('type','button');
			
			//restores state of the application
			//not fully implamented.  There is more cacheing which could happend
			obj.restoreState();
		},
		/**
		 * Updates the login form to display correctly.
		 * @function
		 */
		setLogin : function(){
			if(main.isLoggedIn()){
				$('#login-form').hide();
				$('#logout-form').show();
			} else {
				$('#login-form').show();
				$('#logout-form').hide();
			}
		},
		/**
		 * Holds login information returned after login.  Not implamented.
		 * @param Object
		 */
		loginInfo : null,
		
		/**
		 * Check if the login token is set.
		 * @function
		 */
		isLoggedIn : function(){
			return (typeof sessionStorage.login_token == 'string');
		},
		/**
		 * Perform actual the login.  Called from main.login(). Submits the login for to process.php
		 * <br/>
		 * Uses ajax post and receives back a JSON object on success.
		 * Ajax Return Object:
		 *    {result:boolean}
		 * @function
		 * @see login
		 */
		doLogin : function(){
			//hide the login message
			$('#login-msg').hide();
			
			//perform the ajax post to process.php
			$.ajax({
				type: 'POST',
				url : "process.php?action=login",
				data : $('#login-form').serialize(),
				dataType: 'json',
				
				//communication success
				success:function(data){
					
					if(data.result){
						sessionStorage.login_token = data.token;
						$('#login-form').hide();
						$('#logout-form').show();
						$('#password').val("");
						$('#login-msg').attr('class','good').html("Login Success.").show();
					} else {
						$('#login-msg').attr('class','error').html("Invalid Username or Password.").show();
					}
				},
				
				//communication error
				error:function(){
					$('#login-msg').attr('class','error').html("Login Failed.").show();
				}
			});
		},
		/**
		 * Login.  Bound to the click event of the login button.
		 * Deprecated.  This is no longer used.  This will send
		 * user to google login page and get oAuth token.
		 */
		login : function(){
			
			var temp = window.location.pathname.split('/');
			temp.pop();
			temp = temp.join('/');
			
			
			var url = 'https://accounts.google.com/o/oauth2/auth' + '?' + $.param({
				client_id: '117853050345.apps.googleusercontent.com',
				response_type: 'token',
				redirect_uri: 'http://'+document.domain + temp + '/callback.php',
				scope: 'https://www.googleapis.com/auth/fusiontables'
			});
			document.location.href=url;
		},
		/**
		 * Clears login information form local data stores.
		 * @private
		 */
		_logout : function(){
			delete(sessionStorage.login);
			delete(sessionStorage.loginExpire);
			delete(sessionStorage.login_token);
			main.loginInfo = null;
			$('#login-form').show();
			$('#logout-form').hide();
		},
		/**
		 * Bound tot he logout button.  Called _logout().
		 * @see _logout
		 */
		logout : function(){
			main._logout();
			$('#login-msg').show().attr('class','good').html("Logout Success.");
		},
		
		/**
		 * Used to create new data drop down lists
		 * @private
		 * @type JQuery
		 */
		$htmlDD : null,
		
		/**
		 * Used to create new data delete buttons.
		 * @private
		 * @type JQuery
		 */
		$htmlDelete : null,
		
		/**
		 * Reference to HTML drop down list for map choices
		 * @type JQuery
		 */
		$htmlDDmap : $('#mapselect'),
		
		/**
		 * Add a record for input to the data
		 * @function
		 */
		htmlAddRecord : function(){
			var $ul = $('#data-data-elements');
			var id = $ul.children().length;

			var newElsNames = ['distcode','L','M','H'];
			
			var $li = $(document.createElement('li'));
			$li.attr('id','data-entry-'+id);
			
			//create the DL
			main.$htmlDD.clone().attr('id','distcode-'+id).appendTo($li);
			
			for(x=1; x<newElsNames.length; x++){
				var $temp = $(document.createElement('input'));
				$temp.attr('id',newElsNames[x] + '-' + id).attr('class','round');
				$li.append($temp);
			}
			
			//add the delete
			$li.append(main.$htmlDelete.clone().click(function(){$(this).parent().remove();}));
			
			$ul.append($li);
			return $li;
		},
		
		/**
		 * Save the current record values to local data store.
		 * Event is bound to the save button click
		 */
		htmlSaveRecord : function(){
			var data = main.getCurrentData();
			if(data.LineID != "" && data.tableID != ''){
				main.localData.records[data.tableID][data.LineID] = data;
				main.saveState();
				main._msgData('Data Saved.  See "Pending Changes" to finalize changes.',false);
			} else {
				main._msgData("Missing row `LineID` or `tableID`.", true);
			}
		},
		/**
		 * Used to set the message on data page
		 * @param {String} msg The message to display
		 * @param {boolean} error True if this is an error, false otherwise
		 */
		_msgData : function(msg,error){
			var cls = (error) ? 'error' : 'good';
			$('#data-msg').attr('class',cls).show().html(msg)
		},
		
		/**
		 * Add a record for data, and set record values
		 * @param {int} code The corresponding code from dataMap.code
		 * @param {string} l The low value
		 * @param {string} m The medium value
		 * @param {string} h The high value
		 * @param {boolean} fromFusion If this is a fusion record or local record
		 */
		htmlAddRecordData : function(code,l,m,h, fromFusion){
			var $li = this.htmlAddRecord();
			
			if(fromFusion){
				$li.children().first().val(code).next().val(l).next().val(m).next().val(h);
			} else {
				$li.addClass('local').children().first().val(code).next().val(l).next().val(m).next().val(h);
			}
		},
		
		/**
		 * Builds the html for pending changes page
		 */
		htmlShowPendingChanges : function(){
			var $cont = $('#pending-container-inner');
			var $clear = $(document.createElement('div')).attr('style','clear:both');
			
			//clear contents
			$cont.empty();
			
			/**
			 * options for dataMap.data option
			 * @see dataMap.data
			 */
			var opts = ['_L','_M','_H'];
			
			//loop over the records
			for(var tbl in main.localData.records){
				
			//loop over the contents of records for given table
			for(var x in main.localData.records[tbl]){
				var $cbox = $(document.createElement('input')).attr('type','checkbox').val(tbl+'-'+x).attr('checked','true');
				var $wrap = $(document.createElement('div')).addClass('wrapper');
				var record = main.localData.records[tbl][x];
				var orig = main.localData.origs[tbl][x];
			
				var tblName = (typeof main._mapToName[tbl] == 'undefined') ? tbl : main._mapToName[tbl] + 
						' ( ' + tbl + ' ) ';
				
				//x is the LineID
				$h = $(document.createElement('div')).addClass('head');
				$h.append($cbox).append('<span>LineID: '+x+'</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>Table: '+
						tblName+'</span>');
				$head = $(document.createElement('div')).addClass('header');
				$body = $(document.createElement('div')).addClass('body');
				
				//create the header
				for(var y in dataMap.header){
					if(y != 'tableID'){
						var str = (typeof dataMap.header[y].name != 'undefined') ?
								dataMap.header[y].name : y;
						str += ':';
						str += (typeof record[y] == 'undefined') ? 'N/A' : record[y];
						
						var $div = {};
						
						if(orig[y] != record[y] && 
								!(typeof orig[y] == 'undefined' && record[y] == '')
						){
							var temp = (typeof orig[y] == 'undefined'
											|| orig[y] == ''
										) ? 'N/A' : orig[y];
							$div = $(document.createElement('div')).addClass('child').
								attr('title',temp).addClass('diff').click(function(){
									var temp = $(this).attr('title');
									alert('origional value: '+temp);
								});
						} else {
							$div = $(document.createElement('div')).addClass('child');
						}
						$div.html(str);
						$head.append($div);
					}
				}
				
				//create the data entries
				for(var y in dataMap.data){
					//verify that the record exists
					if(	(
						(typeof record[y+'_L'] != 'undefined' && (record[y+'_L'] != '')) ||
						(typeof record[y+'_M'] != 'undefined' && (record[y+'_M'] != '')) ||
						(typeof record[y+'_H'] != 'undefined' && (record[y+'_H'] != ''))
						) 
					){
						//add option for each record
						for(var i in opts){
							var str = y + opts[i] + ':' + record[y+opts[i]];
							var $div = {};
							if( orig[y+opts[i]] != record[y+opts[i]]
								&& !(typeof orig[y+opts[i]] == 'undefined' && record[y+opts[i]] == '')
							){
								var temp = (typeof orig[y+opts[i]] == 'undefined'
										|| orig[y+opts[i]] == ''
									) ? 'N/A' : orig[y+opts[i]];
								
								$div = $(document.createElement('div')).addClass('child').
									addClass('diff').attr('title',temp).click(function(e){
										var temp = $(this).attr('title');
										alert('origional value: '+temp);
									});
							} else {
								$div = $(document.createElement('div')).addClass('child');
							}
							$div.html(str);
							$body.append($div);
						}
					}
				}
				
				//assembles the HTML to the DOM
				if($body.html() == '') $body.html('NO DATA');
				
				$head.append($clear.clone());
				$body.append($clear.clone());
				
				$wrap.append($h);
				$wrap.append($head);
				$wrap.append($body);
				
				$cont.append($wrap);
			}
			}
			
		},
		/**
		 * Private method for get all selected pending elements
		 * @private
		 */
		_getSelectedPending : function(){
			return $('#pending-container-inner input:checked');
		},
		/**
		 * Makes the request to get schema for specified table.
		 * Will store the schema locally in main.schema[tableID]
		 * @private
		 * @param {String|integer} tableID The fusion table id to get schema for
		 * @return {boolean|JSON} False on failure or reference to main.schema[tableID]
		 * @see main.schema
		 */
		_setSchema : function(tableID){
			if(typeof main.schema[tableID] == 'undefined' || main.schema[tableID].length < 1){
				$.ajax('process.php?action=schema&tableID='+tableID,{
					dataType:'json',
					success: function(data){
						if(!data.result){
							return false;
						} else {
							main.schema[tableID] = data.schema;
						}
					},
					error : function(){
						return false;
					}
				});
			} else {
				return main.schema[tableID];
			}
		},
		/**
		 * Goes through pendings and looks up table ids and builds the schema
		 * for those fusion tables Ids.  Calls _checkSchema().
		 * @private
		 * @return {void}
		 */
		_setAllSchema : function(){
			
			var $pendings = main._getSelectedPending();
			var ids = [];
			$pendings.each(function(){
				var parts = $(this).val().split('-');
				var tbl = parts[0];
				ids.push(tbl);
				var fields = main._setSchema(tbl);
			});
			
			main._schemaTables = ids;
			main._schemaCheckStart = Date.now();
			
			setTimeout(main._checkSchema,100);
		},
		/**
		 * Holds reference to table schemas.  
		 * JSON structure:
		 *  {<fusionTableID>:<array of field names>}
		 * @private
		 * @type JSON
		 */
		_schemaTables : [],
		/**
		 * Date.now() value for when first call to _checkSchema() was called.
		 * @private
		 * @type integer
		 */
		_schemaCheckStart : null,
		/**
		 * Called once a _setSchema() is complete.
		 * @private
		 * @type Function
		 */
		_schemaCallback : function(){},
		/**
		 * Called repeatedly with setTimeout.  Waits for timeout (10 seconds) or
		 * the schema has been loaded.
		 * @private
		 */
		_checkSchema : function(){
			console.log('checking');
			
			if(main._schemaCheckStart + 10000 > Date.now()){
				for(var x in main._schemaTables){
					if(typeof main.schema[main._schemaTables[x]] == 'undefined'){
						setTimeout(main._checkSchema,100);
						return;
					}
				}
			} else {
				main._msgPush('Failed to check schema.  Proceeding anyway...',true,true);
				setTimeout(main._schemaCallback,1000);
				return;
			}
			main._schemaCallback();
			return;
		},
		/**
		 * Push/Save selected pending changes
		 */
		htmlPendingPush : function(){
			if(!main.isLoggedIn()){
				main._msgPush('Must be logged in.', true);
				return;
			}
			main._msgPush('Determining tables schemas...',false,false);
			main._schemaCallback = main.htmlPendingPushFinish;
			main._setAllSchema();
		},
		/**
		 * Once the schema check is done, this method is called.
		 * @see https://developers.google.com/fusiontables/docs/developers_reference#reserved
		 */
		htmlPendingPushFinish : function(){
			
			var $pendings = main._getSelectedPending();
			//var base = "https://www.google.com/fusiontables/api/query?sql=";
			var base = "process.php?action=update";
			
			//loop over all pending records
			$pendings.each(function(){
				var parts = $(this).val().split('-');
				var tbl = parts[0];
				var line = parts[1];
								
				var sql = "";//"UPDATE " + main.fusion.query.from + " SET ";
				var entry = main.localData.records[tbl][line];
				
				var temp = {};
				
				//the schema is not an associative array
				//currently this is a hack so simple check
				//for field name does exist.
				for(var x in main.schema[tbl]){
					temp[main.schema[tbl][x]] = 0;
				}
				
				//build the update portion of the fusion query
				for(var x in entry){
					//reserved key words
					//https://developers.google.com/fusiontables/docs/developers_reference#reserved
					if( x != "FROM" && x != "TO" && x !="WHERE" ){
						
						//we have a schema to check against
						if((typeof main.schema[tbl] != 'undefined' && main.schema[tbl].length > 0)){
							
							if(typeof temp[x] != 'undefined'){
								main.logger('htmlPendingPushFinish','addend update entry for: '+x+'='+entry[x]);
								
								sql += '' + x + '=\'' + entry[x] + '\',';
							} else {
								//console.log("here 3");
								//invalid field name
								main._msgPush("Invalid field name.  Skipped("+
										x+" in "+tbl+", "+line+")", true, true);
								main.logger('htmlPendingPushFinish',"Invalid field name.  Skipped("+
										x+" in "+tbl+", "+line+")")
							}
						//no schema
						} else {
							main.logger('htmlPendingPushFinish','No schema available.  Updating: '+x+'='+entry[x]);
							sql += '' + x + '=\'' + entry[x] + '\',';
						}
						
					}else{
						
						//invalid field name
						main._msgPush("Invalid field name.  Skipped("+
								x+" in "+tbl+", "+line+")", true, true);
						
						main.logger('htmlPendingPushFinish','Invalid field name.  Skipping: '+x);
					}
				}
				sql = sql.substr(0,sql.length-1);//remove comma
				
				//sql += "%20WHERE%20LineID=" + entry.LineID;
				
				if(sql == ""){
					main.logger('htmlPendingPushFinish','No fields to update');
					main._msgPush("No valid fields to update (Error 002a).  Skipped("+
							x+" in "+tbl+", "+line+")", true, true);
					return;
				}
				
				//send the query
				$.ajax(base,{
						data:{
							query:sql,
							LineID:entry.LineID,
							table:entry.tableID,
						},
						type:"POST",
						dataType:'json',
						success:function(data){
							if(!data.result){
								main.logger('htmlPendingPushFinish',
										'Error performing query.(code,tableID,LineID)<br/>('+
										data.code+','+data.tableID+','+data.LineID+')'
										);
								if(data.code == 401){
										main._msgPush('Must be logged in (Error 401).',true,true);
										main.logout();
								}else if(data.code == 400){
									main._msgPush('Invalid query (Error 400).',true,true);
								}else if(data.code == 403){
									main._msgPush('User does not have permission to edit table ('+
											data.tableID+','+data.LineID+') (Error 403).',true,true);
								}else if(data.code == 1){
									main._msgPush('Failed to identify unique row id. ('+
											data.tableID+','+data.LineID+') (Error 001).',true,true);
								}else if(data.code == 2){
									main._msgPush('No valid fields to update. ('+
											data.tableID+','+data.LineID+') (Error 002).',true,true);
								} else {
									main._msgPush('Unknown error.',true,true);
								}
							} else {
								main.logger('htmlPendingPushFinish','Push was successful.');
								main._msgPush('Successfully pushed changes ('+
										data.tableID+','+data.LineID+').',false,true);
								main.htmlPendingSuccess(data);
							}
						},
						error:function(err){
							main.logger('htmlPendingPushFinish','Communication error');
							main._msgPush('Communication Error.',true,true);
						}
					}
				);
			});
		},
		/**
		 * Used to set the message on push page
		 * @param {string} msg The message to display
		 * @param {boolean} error True if this is an error, false otherwise
		 * @param {boolean} [optional] Default is false. True to append to msgbox
		 * @private
		 */
		_msgPush : function(msg,error,append){
			var cls = (error) ? 'error' : 'good';
			
			if(typeof append == "undefined"){
				append = false;
			}
			
			if(append){
				if(error){
					$('#pending-msg').attr('class',cls).show().prepend(msg+'<br/>');
				} else {
					$('#pending-msg').show().prepend(msg+'<br/>');
				}
			} else {
				$('#pending-msg').attr('class',cls).show().html(msg);
			}
		},
		/**
		 * Called when a query was successfully completed.
		 * @param {JSON} data An object with the data.TableID and data.LineID
		 */
		htmlPendingSuccess : function(data){
			var id = data.tableID + '-' + data.LineID;
			
			//update the orig
			main.localData.origs[data.tableID][data.LineID] = main.localData.records[data.tableID][data.LineID];
			
			//remove from records to update
			delete(main.localData.records[data.tableID][data.LineID]);
			
			//refresh data
			$('#window-data').html('Successfully Updated.<br/>Close window to refresh data.');
			$('#EditPoint').hide();
			main.initFusionLayer(data.tableID);
			
			main.saveState();
			
			//show the delete
			main.htmlRemoveRecord(id);
		},
		/**
		 * Delete selected pending changes
		 * @param {string|integer} [optional] id Default value of "*" (delete all). The LineID of the record to be deleted from pendings.
		 */
		htmlPendingDelete : function(id){
			var $pendings = main._getSelectedPending();
			
			if(typeof id == 'undefined'){
				id = '*';
			}
			
			$pendings.each(function(){
				
				var parts = $(this).val().split('-');
				var tbl = parts[0];
				var line = parts[1];
				
				if(id == '*' || id == $(this).val()){				
					//remove from local datastore
					delete(main.localData.records[tbl][line]);
					main.saveState();
					
					//remove the HTML element
					$(this).parent().parent().detach();
					
					main._msgPush('Removed Element.', false, false);
				}
			})
		},
		
		/**
		 * Remove an HTML entry from data list
		 * @param {integer} id the unique id for the element
		 * @TO-DO When you delete an element, the "missing data" will not be shown in the diff
		 */
		htmlRemoveRecord : function(id){
			main.htmlPendingDelete(id);
		},
		
		/**
		 * Removes all elements from the data list
		 */
		htmlRemoveAllRecords : function(){
			$('#data-data-elements').empty();
		},
		
		/**
		 * Private object for holding id=>field_name of dataMap.data object.
		 * @private
		 */
		_cacheCrackById : {},
		
		/**
		 * Get the crack type drop down list id value to fusion map field name
		 * @param id Integer Id of the dataMap.data.<field name>.id
		 * @private
		 */
		_getCrackTypeById : function(id){
			if(typeof this._cacheCrackById.length == 'undefined'){
				for(var x in dataMap.data){
					this._cacheCrackById[dataMap.data[x].code] = x;
				}
			} 
			return this._cacheCrackById[id];
		},
		/**
		 * Get the current information about data
		 * @return {JSON} <field name>:<value>...
		 * @see dataMap object
		 */
		 getCurrentData : function(){
			var data = {};
			
			//get the header information
			for(var x in dataMap.header){
				data[x] = $('#'+x).val();
			}
			
			//get the body elements
			$('#data-data-elements li').each(function(){
				//row from <ul> wrapper
				var $el = $(this);
				
				//get the drop down list value
				var typeId = $el.find('select').val();
				var typeCrack = main._getCrackTypeById(typeId);
				
				//get the inputs values
				var inputs = $el.find('input');
				var low = $(inputs[0]).val();
				var med = $(inputs[1]).val();
				var high= $(inputs[2]).val();
				
				data[typeCrack+'_L'] = low;
				data[typeCrack+'_M'] = med;
				data[typeCrack+'_H'] = high;
				
			});
			
			//add missing entries
			var opts = ['_L','_M','_H'];
			for(var x in dataMap.data){
				for(var y in opts){
					if(typeof data[x+opts[y]] == 'undefined'){
						data[x+opts[y]] = "";
					}
				}
			}
			
			return data;
		 },
		_mapToName : {},
		/**
		 * Initializes the map choices.  All parameters are optional
		 * but if lat is set, it is expected that lgt and callback are 
		 * also set.
		 *
		 * Performs 2 different operations
		 * - If lat is set:
		 *   + Order list based on closest to lat and lgt given
		 * - If lat undefined
		 *   + Order based on however fusion tables returns query
		 *   
		 *   @param {integer} lat The latitude
		 *   @param {integer} lgt The longitude
		 *   @param {function} callback Callback to be executed after map has been initialized
		 */
		initHtmlMapOptions : function(lat,lgt,callback){	
		
			if(typeof lat == "undefined" || typeof lgt == "undefined"){
				var query = "SELECT FusionID, CenterPoint, LocationName FROM 3004080";
			} else {
				var query = "SELECT FusionID, CenterPoint, LocationName FROM 3004080 ORDER BY ST_DISTANCE(CenterPoint, LATLNG("+lat+","+lgt+")) ASC"
			}
			var query = "SELECT FusionID, CenterPoint, LocationName FROM 3004080";
			var queryUrlHead = "https://www.google.com/fusiontables/api/query?sql=";
			var queryUrlTail = '&jsonCallback=?';
			var queryurl = encodeURI(queryUrlHead + query + queryUrlTail);
			
			var dataHandler = function(d) 
			{
				// data[x][0] is the fusionID, data[x][1] is the centerpoint, data[x][2] is the text name of each entry
				var data = d.table.rows; 
				
				main.$htmlDDmap.empty();
				
				var optn = document.createElement("OPTION");
				optn.text = "Choose Location";
				optn.value = 0;
				main.$htmlDDmap.append(optn);
				
				for (var x in data) 
				{
					var optn = document.createElement("OPTION");
					optn.text = data[x][2];
					optn.value = data[x][0]+'*'+data[x][1];
					main.$htmlDDmap.append(optn);
					main._mapToName[data[x][0]] = optn.text;
				}
				if(typeof callback != "undefined"){
					callback();
				}
			};
			// makes the actual query
			var jqxhr = $.get(queryurl, dataHandler, "jsonp");
		},
		/**
		 * Binds the map selection drop down list change event
		 * Fusion table initialization happens on this change
		 * @see initFusionLayer()
		 */
		bindHtmlMapChange : function(){
			//bind the click options
			this.$htmlDDmap.change(function (e) {
				selectedfusion = $(this).find('option:selected').val();
				
				//this is the "Select Location" option
				if(selectedfusion == 0) return;
				
				// get the correct set of coords from the coord array
				var info = selectedfusion.split('*');
				var fusionId = info[0];
				var splitcoords = info[1].split(',');
				var lat = splitcoords[0];
				var lng = splitcoords[1];
				
				main.$navs.filter("#map").trigger('click'); // make this happen from new page
								
				var city = new google.maps.LatLng(lat,lng);
				main.map.panTo(city);
				
				main.initFusionLayer(fusionId);
				
				$('#map-name').html($(this).find('option:selected').html());
			});
		},
		
		/**
		 * Designed to restore last state based on sessionData and
		 * localStorage.  Not fully implamented.
		 * @see saveState()
		 * @TO-DO Add all the Map stuff
		 */
		restoreState:function(){
		
			//get the data
			if(typeof sessionStorage.sessionData == 'string'){
				this.sessionData = JSON.parse(sessionStorage.sessionData);
			}
			if(typeof localStorage.update == 'string'){
				this.localData.records = JSON.parse(localStorage.update);
			}
			if(typeof localStorage.orig == 'string'){
				this.localData.origs = JSON.parse(localStorage.orig);
			}
			
			$('#'+this.sessionData.navActive).trigger('click');
			
		},
		/**
		 * Should take a snapshot and store this locally
		 * @see restoreState()
		 */
		saveState:function(){
			//store the data in local object
			this.sessionData.navActive = this.$current.attr('id');
			
			//write to the session Data
			sessionStorage.sessionData = JSON.stringify(this.sessionData);
			
			//write localData to data store
			localStorage.update = JSON.stringify(this.localData.records);
			localStorage.orig = JSON.stringify(this.localData.origs);
		},
		
		/**
		 * This is a local data store for this session
		 * @class
		 */
		sessionData : {
			/**
			 * The last clicked nav element.
			 * @type JQuery
			 */
			navActive : null,
		},
		
		/**
		 * Data is stored in this object
		 * Used by the froms for before push
		 * @class
		 */
		localData : {
			/**
			 * Modified records are stored here
			 * format:
			 *     {<LineID>:{LineID:<LineID>,ALLIG_L,ALLIG_M,ALLIG_M....FIELD36_H},...}
			 */
			records : {},
			/**
			 * Origional data records from fusion mapped.
			 * Populated when the "Edit" button is clicked
			 * format:
			 *     {<LineID>:{LineID:<LineID>,ALLIG_L,ALLIG_M,ALLIG_M....FIELD36_H},...}
			 */
			origs : {}
		},
		/**
		 * Holds the table schema to avoid update errors.
		 * schema[<tableId>][<field1>,<field2>,...];
		 * @class
		 */
		schema : {},
		/**
		 * Looks for users position.  Has success or failure.
		 * @see setLocationCallback() This is the on success
		 * @see getLocationFailed() This is on error
		 */
		initLocation : function(){
			navigator.geolocation.
				getCurrentPosition(main.setLocationCallback,main.getLocationFailed);
		},
		/**
		 * Holds google marker object representing users position
		 * @type google.maps.Marker
		 */
		marker : null,
		
		/**
		 * The max distance marker should be from closest position
		 * and still center map to the user
		 * @type integer The distance in miles
		 */
		maxMarkerDist : 10, //miles
		
		/**
		 * This is the callback function for setting location for
		 * user on the map.
		 * @param {google.maps.LatLng} position The system position returned
		 * @see initLocation() Scope of this function
		 * @see watchLocation() Called at end.
		 * @see http://www.w3.org/TR/geolocation-API/#geolocation_interface
		 */
		setLocationCallback : function(position){
			
			//reset the menu to be ordered
			var lat = position.coords.latitude;
			var lgt = position.coords.longitude;
			main.initHtmlMapOptions(lat,lgt,
				function(){
					var $ddList = main.$htmlDDmap.children().first().next();
					var fusionId = $ddList.val().split('*')[0];
					
					if(fusionId != 0) main.initFusionLayer(fusionId);
					
					//set the map name in toolbar
					$('#map-name').html($ddList.html());
					
					//check the distance and determine if there is a reason to locate map
					//to current user position
					var mapPos = main.map.getCenter();
					var dist = main.distanceBetweenPoints(lat,lgt,mapPos.lat(),mapPos.lng());
					
					//bail if the user is nowhere near anything
					//if(dist > main.maxMarkerDist) return;
					
					var loc = new google.maps.LatLng(lat,lgt);
					
					var img = new google.maps.MarkerImage('images/ml.png');
					
					main.marker = new google.maps.Marker({
						draggable:false,clickable:false,position:loc,icon:img
					});
					
					main.marker.setMap(main.map);
					
					if(dist < main.MarkerDist){
						main.map.panTo(loc);
					}
					
					main.watchLocation();
				}
			);
		},
		/**
		 * Calculate the length between 2 points given lat and long
		 * @param {float} lat1 First points latitude
		 * @param {float} lon1 First points longitude
		 * @param {float} lat2 Second points latitude
		 * @param {float} lon2 Second points longitude
		 * @return {float} The arc distance between 2 given points on the globe.
		 */
		distanceBetweenPoints : function(lat1,lon1,lat2,lon2){
			var R = 3963; // miles
			var dLat = (lat2-lat1) * 3.14/180;
			var dLon = (lon2-lon1) * 3.14/180;
			var lat1 = lat1 * 3.14/180;
			var lat2 = lat2 * 3.14/180;

			var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
					Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
			var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
			return R * c;
		},
		/**
		 * If a position for user is found, then this is called.
		 * Updates the marker.
		 * @see marker
		 * @see setLocationCallback() Scope of this funcitno
		 */
		watchLocation : function(){
			main.logger('watchLocation','Start');
			navigator.geolocation.watchPosition(
				main.updatePosition, 
			    main.getLocationFailed,
			    {enableHighAccuracy:true, maximumAge:5000, timeout:15000}
			);
			main.logger('watchLocation','Complete');
		},
		
		/**
		 * updates the users position, called from watchLocation
		 * @param Object position
		 * @see http://dev.w3.org/geo/api/spec-source.html#watch-position
		 * @see watchLocation
		 */
		updatePosition : function(position){
			main.logger('updatePosition','Called');
			try{
				var lat = position.coords.latitude;
				var lgt = position.coords.longitude;
				
				main.logger('updatePosition','position: '+lat+','+lgt);
				
				var loc = new google.maps.LatLng(lat,lgt);
				main.marker.setPosition(loc);
			}catch(err){
				main.logger('updatePosition',err);
			}
		},
		/**
		 * Handles errors from attempting to find user location.
		 * @param {PositionError} error Native error thrown by browser on Geolocation.getCurrentPosition() error.
		 * @see watchLocation()
		 * @see initLocation()
		 * @see http://www.w3.org/TR/geolocation-API/#position-error
		 * @see http://www.w3.org/TR/geolocation-API/#geolocation_interface
		 */
		getLocationFailed : function(error){
			main.logger('getLocationFailed',error.code);
			main.logger('getLocationFailed',error.message);
			
			switch(error.code)  
            {  
                case error.PERMISSION_DENIED: 
				//user did not share location, do nothing
                break;  
  
                case error.POSITION_UNAVAILABLE: 
                //could not locate current position
                break;  
  
                case error.TIMEOUT: 
				//timeout error
                break;  
  
                default: 
                //unknown error
                break;  
            }
		},
		/**
		 * The google map
		 * @type google.maps.Map
		 */
		map:null,        //the google map
		
		/**
		 * Currently loaded fusion table
		 * @type google.maps.FusionTablesLayer
		 */
		fusion:null,     //the fusion layer
		
		/**
		 * Customized popup window
		 * @type google.maps.InfoWindow
		 */
		mapWindow:null, //the popup window in map
		
		/**
		 * Initializes the google map.
		 */
		initMap : function(){
			main.logger('initMap','start');
			
			try{
			//initialized to TransMap headquarters
			var city = new google.maps.LatLng(40.021951,-83.092109);
			
			this.map = new google.maps.Map(main.$mapWrapper[0], {
				center: city,
				zoom: 17,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				zoomControlOptions: {style: google.maps.ZoomControlStyle.SMALL},
				streetViewControl: false,			  
			});
			
			var img = new google.maps.MarkerImage('images/logo-small.png');
			
			worldHeadQuarters = new google.maps.Marker({
				draggable:false,clickable:false,position:city,icon:img,title:"World Headquarters"
			});
			
			worldHeadQuarters.setMap(main.map);
			
			}catch(err){
				main.logger('initMap',err);
			}
			main.logger('initMap','Complete.');
		},
		
		/**
		 * Initialize a Fusion Table Map Layer
		 * @param {integer} id The unique fusion table id to load
		 */
		initFusionLayer : function(id){
			var obj = this;
			
			main.logger('initFusionLayer','Start');
			
			try{
				this.fusion.setMap(null);
			}catch(e){
				main.logger('initFusionLayer',e);
			}
			
			try{
			this.fusion = new google.maps.FusionTablesLayer({
			query: {
				select: 'geometry',
				from: id, // again, geolocation to replace this with closest one
			},
			suppressInfoWindows: true,
			styles: [{
				polygonOptions: {
					fillColor: "#00FF00",
					fillOpacity: 0.3
					}
				}]
			});
			}catch(e){
				main.logger('initFusionLayer',e);
			}
			
			main.logger('initFusionLayer','Running:<br/> main.fusion.setMap<br/>main.initInfoWindow()<br/>main.initFusionClickEvent()');
			
			try{
			main.fusion.setMap(main.map);
			main.initInfoWindow();
			main.initFusionClickEvent();
			}catch(e){
				main.logger('initFusionLayer',e);
			}
			main.logger('initFusionLayer','Complete');
		},
		
		/**
		 * Initializes the informaiton window.
		 * @see mapWindow
		 */
		initInfoWindow : function(){
			main.logger('initInfoWindow','start');
			try{
				this.mapWindow = new google.maps.InfoWindow({
					content:"<div id='infoWindow'><h2>Information</h2><div id='window-data'></div><br/><input id='EditPoint' type='button' value='Edit'/></div>"
				});
			}catch(e){
				main.logger('initInfoWindow',e);
			}
			
			main.logger('initInfoWindow','Complete');
		},
		/**
		 * Updates the info window with meta data about point of interest clicked on.  Loops
		 * through the dataMap.header looking for keys in the data parameter.
		 * @param {JSON} data The meta data values.  
		 */
		updateInfoWindow : function(data){
			main.logger('updateInfoWindow','start');
			
			try{
				var $rep = $('#window-data');
				
				for(var x in dataMap.header){
					if(dataMap.header[x].meta 
								&& typeof data[x] != 'undefined'){
						if(typeof data[x] == 'object'){
							$rep.append('<span class="title">'+dataMap.header[x].name+'</span>: '+data[x].value+'<br/>');
						} else {
							$rep.append('<span class="title">'+dataMap.header[x].name+'</span>: '+data[x]+'<br/>');
						}
					}
				}
				
				//build the image links
				var image = "IMAGE";
				if(data[image]){
					var a = $(document.createElement('a'));
					a.html('View Images');
					if(typeof data[image] == 'object'){
						a.click(function(){
							main.$navs.filter('#images').click();
							$('#imageFrame').attr('src',data[image].value);
						});
					} else {
						a.click(function(){
							main.$navs.filter('#images').click();
							$('#imageFrame').attr('src',data[image]);
						});
					}
					$('#imageFrame').css({'height':($(window).height()-40)+'px'})
					$rep.append(a);
				}else{
					main.logger('updateInfoWindow','No image<br>'+data[image]);
				}
			}catch(e){
				main.logger('updateInfoWindow',e);
			}
			main.logger('updateInfoWindow','complete');
		},
		/**
		 * Binds the click event for the current fusion table layer
		 */
		initFusionClickEvent : function(){
			main.logger('initFusionClickEvent','start');
			
			//bind the click event to fusion layer
			google.maps.event.addListener(main.fusion, 'click', function(e) {
				main.logger('initFusionClickEvent','adding fusion layer listener');
				
					//fusion tbale id
					var fid = main.fusion.query.from;
					
					//get data from fusion or local data store if it exists.
					//pulls from local if it exists, fusion tables otherwise
					
					var fromFusion = (typeof main.localData.records[fid] == "undefined"
							|| typeof main.localData.records[fid][e.row.LineID.value] == "undefined");
					var data = (fromFusion) ? e.row : main.localData.records[fid][e.row.LineID.value];
					
					//set the position of the information window
					//to the clicked on element
					main.mapWindow.setPosition(e.latLng);
					
					//bind the map window to the map
					main.mapWindow.open(main.map);
					
					//alter the class (for display purposes) and bind a click event
					$('#infoWindow')
					.find('#EditPoint').click(function(){
				
						main.logger('initFusionClickEvent','Begin bind edit button click');
					
						try{
						
						//holds the original fusion tables values
						var orig = {};
					
						//clean up the HTML data area
						main.htmlRemoveAllRecords();
						
						//begin data structure
						if(typeof main.localData.records[fid] == "undefined"){
							main.localData.records[fid] = {};
						}
						if(typeof main.localData.origs[fid] == "undefined"){
							main.localData.origs[fid] = {};
						}
						
						
						for(var key in dataMap.header){
							try{
								var entry = (fromFusion) ? data[key].value : data[key];
								var field = key;
								
								//set the forms value
								$('#'+field).val(entry);
								
								//update original data
								orig[field] = e.row[key].value;
							} catch(err){
								main.logger('initFusionClickEvent - mapping data(key:'+key+')',err);
							}
						}
						
						//set the table id
						$('#tableID').val(fid);
						
						}catch(e){
							main.logger('initFusionClickEvent - Line 1649',e);
						}
					//cycle through all fusion table data
					//and add the records into the HTML
					for(var key in dataMap.data){
						try{
							var l = (fromFusion) ? data[key + '_L'].value : data[key + '_L'];
							var m = (fromFusion) ? data[key + '_M'].value : data[key + '_M'];
							var h = (fromFusion) ? data[key + '_H'].value : data[key + '_H'];
							var code = dataMap.data[key].code;
							
							if(l != '' || m != '' || h != ''){	
								main.htmlAddRecordData(code,l,m,h,fromFusion);
							}
							
							//add to origional data
							orig[key+'_L'] = e.row[key+'_L'].value;
							orig[key+'_M'] = e.row[key+'_M'].value;
							orig[key+'_H'] = e.row[key+'_H'].value;
							
						} catch(err){
							main.logger('initFusionClickEvent - (key:'+key+')',err);
						}
					}
					
					
					
					//update local data
					main.localData.origs[fid][orig.LineID] = orig;
					main.saveState();
					
					//trigger the data tab and then show data-data sub nav
					$('#data').click();
					$('#data-data').click();
					
				}).show();
				
				main.logger('initFusionClickEvent','Complete');
				
				main.updateInfoWindow(data);
			});
		}
	};

$(document).ready(function(){
	//initialize the navigation and basic events
	main.init();
	
	//initialize the map, no fusion stuff
	main.initMap();
	
	//initialize the drop down menu
	main.initHtmlMapOptions();
	
	//bind the map choice drop down list change event
	main.bindHtmlMapChange();
	
	//attempt to position map based on user's location
	main.initLocation();
	
	window.main = main;
});
