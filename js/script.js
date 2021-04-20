$(function(){
  $('.menu-trigger').on('click',function(event){
    $(this).toggleClass('active');  // toggleClass() 指定した要素に指定したクラスの追加・削除を行う。thisの要素にクラス'active'を追加・削除する
    $('#sp-menu').fadeToggle();　 // fadeToggle() 要素のフェードイン・フェードアウトを切り替えるメソッド
    event.preventDefault();  // aタグの機能を無効にするメソッド
  });
});