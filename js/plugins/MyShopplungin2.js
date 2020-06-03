
//=============================================================================
// MyShopplungin.js
//=============================================================================

/*:
 * @plugindesc  這是一個修改商店內容的插件。
 * 
 * @author BridgeLin
 *
 * @help
 * 
 * Shop_open(supply,luxury,jpluxury,rate) 
 * 可通過插件命令改變物價
 * Shop_close() 
 * 還原預設值
 * 
 * 
 * 
 *
 * @param supply_rate
 * @desc 決定民生必需品物價比率的參數，百分比(%)
 * @type number
 * @default 50
 * 
 * 
 * 
 * @param luxury_rate
 * @desc 決定中國奢侈品物價比率的參數，百分比(%)
 * @type number
 * @default 50
 * 
 * 
 *
 * 
 * @param jp_luxury_rate
 * @desc 決定日本奢侈品物價比率的參數，百分比(%)
 * @type number
 * @default 50
 * 
 * 
 * 
 * @param rate
 * @desc 決定其他商品物價比率的參數，百分比(%)
 * @type number
 * @default 50
 */




//-----------------------------------------------------------------------------
// Scene_Shop
//
// The scene class of the shop screen.



/*function Scene_Shop() {
    this.initialize.apply(this, arguments);
}*/

//建立命名空間
var $Myshop=$Myshop||{};



$Myshop.Parameter = PluginManager.parameters('MyShopplungin');
var Supply_Rate = $Myshop.Parameter.supply_rate/100 ||{};
var Luxury_Rate = $Myshop.Parameter.luxury_rate/100 ||{};
var Luxury_Rate_jp = $Myshop.Parameter.jp_luxury_rate/100 ||{};
var Rate = $Myshop.Parameter.rate/100 || {};
var nowprice=0;

/**
 * 以下是運行中修改物價的插件命令
 * Shop_open置於商店場景前，Shop_close置於後
 * @param {*} supply 
 * @param {*} luxury 
 * @param {*} jpluxury 
 * @param {*} rate 
 */
var Shop_open = function(supply,luxury,jpluxury,rate){

   this.Supply_Rate=supply/100;
   this.Luxury_Rate=luxury/100;
   this.Luxury_Rate_jp = jpluxury/100;
   this.Rate = rate/100;
}
var Shop_close = function(){
 this.Supply_Rate = $Myshop.Parameter.supply_rate/100;
 this.Luxury_Rate = $Myshop.Parameter.luxury_rate/100;
 this.Luxury_Rate_jp = $Myshop.Parameter.jp_luxury_rate/100;
 this.Rate = $Myshop.Parameter.rate/100;

}


Game_Interpreter.prototype.pluginCommand = function(command, args){
    if(command == "Shop_open"){
        Shop_open(args[0],args[1],args[2],args[3]);
    }else if(command == "Shop_close"){
        Shop_close();
    }
}


//這個方法決定玩家的買入價格，比率乘上原本價格再加一成
$Myshop.buyingPrice=Scene_Shop.prototype.buyingPrice;
$Myshop.buyingPrice = function() {
    $Myshop.buyingPrice.call(this);
    if(this._item.id >=100 && this._item.id <200){
        //民生必需品的價格
        nowprice = this._item.price * Supply_Rate * 1.5;
    }else if(this._item.id >=200 && this._item.id <250){
        //奢侈品的價格
        nowprice = this._item.price * Luxury_Rate * 1.5;
    }else if (this._item.id >=250 && this._item.id <300){
        //奢侈品的價格
        nowprice = this._item.price * Luxury_Rate_jp * 1.5;
    }else{
        nowprice = this._item.price * Rate * 1.5;
    }
    return nowprice;
};

//這個方法決定玩家的售出價格
$Myshop.sellingPrice=Scene_Shop.prototype.sellingPrice;
$Myshop.sellingPrice = function() {
    $Myshop.sellingPrice.call(this);
    if(this._item.id >=100 && this._item.id <200){
        //民生必需品的價格
        return Math.floor(this._item.price * Supply_Rate);
    }else if(this._item.id >=200 && this._item.id <250){
        //奢侈品的價格
        return Math.floor(this._item.price * Luxury_Rate);
    }else if (this._item.id >=250 && this._item.id <300){
        //奢侈品的價格
        return Math.floor(this._item.price * Luxury_Rate_jp);
    }else{
        return Math.floor(this._item.price * Rate);
    }
    
};

//調整玩家購買時的價格顯示
$Myshop.windowprice= Window_ShopBuy.prototype.price;

$Myshop.windowprice = function(item) {
    $Myshop.windowprice.call(this);
    if(item.id >=100 && item.id <200){
        //民生必需品的價格
        nowprice = item.price * Supply_Rate * 1.5;
    }else if(item.id >=200 && item.id <250){
        //奢侈品的價格
        nowprice = item.price * Luxury_Rate * 1.5;
    }else if (item.id >=250 && item.id <300){
        //奢侈品的價格
        nowprice = item.price * Luxury_Rate_jp * 1.5;
    }else{
        nowprice = item.price * Rate * 1.5;
    }
    return nowprice;
   
};




