function InitExternEval() 
    {
		console.log("InitExternEval");
       
    }
	
	function TakeReward()
	{
		
	}
	
	function RewardErrorHandled()
	{
		
	}
	

		
		function ExternEval() 
		{
			console.log("ExternEval");
		}
		
		function PreloadRewarded() 
		{
			
		}
		
		function ShowRewarded() 
		{
			
		}
		
		function isMobile() { return ('ontouchstart' in document.documentElement); }
		
		function OpenLink()
		{
			try
			{
				if (isMobile() == false)
				{
					document.onmouseup = function()
					{
						window.open("https://www.julgames.com");
						document.onmouseup = null;
					}
				}
			}
			catch(e){  }
		}
	
		window.adRunning = 0;
		window.adReward = 0;
		window.rewardError = 0;
		window.canReward = 0;
		
		window.callTime = 0;
		window.adPlatform = 5;
		window.freezenova = "www.FreezeNova.com";
	


const scriptsInEvents = {

	async Menu_sheet_Event1_Act1(runtime, localVars)
	{
		InitExternEval();
	},

	async Menu_sheet_Event1_Act2(runtime, localVars)
	{
		if (typeof window.freezenova !== 'undefined') {
			runtime.globalVars.linktxt = window.freezenova;
		}
		
	},

	async Menu_sheet_Event2_Act1(runtime, localVars)
	{
		ExternEval();
	},

	async Ads_Event1_Act1(runtime, localVars)
	{
		runtime.globalVars.adActive = window.adRunning;
	},

	async Ads_Event1_Act2(runtime, localVars)
	{
		runtime.globalVars.adReward = window.adReward;
	},

	async Ads_Event1_Act3(runtime, localVars)
	{
		runtime.globalVars.canReward = window.canReward;
	},

	async Ads_Event6_Act1(runtime, localVars)
	{
		console.log("Pressed K");
		window.adRunning = 1;
	},

	async Ads_Event7_Act1(runtime, localVars)
	{
		console.log("Pressed L");
		window.adRunning = 0;
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

