$(document).ready(function(){
    //
    //Primer espacio interactivo de usuario
    //Color melamina..
    const botonBellota = $("#botonBellota");
    const botonRoble = $("#botonRoble");
    const botonFresno = $("#botonFresno");
    const botonNacar = $("#botonNacar");
    const botonNegro = $("#botonNegro");
    const sliderMela = $(".imgSpaceInterativeMelaUSer");
    $(botonBellota).click(function(event){
        $(sliderMela).css("transform", "translate(40%)");
    });
    $(botonRoble).click(function(event){
        $(sliderMela).css("transform", "translate(20%");
    });
    $(botonFresno).click(function(event){
        $(sliderMela).css("transform", "translate(0%)");
    });
    $(botonNacar).click(function(event){
        $(sliderMela).css("transform", "translate(-20%)");
    });
    $(botonNegro).click(function(event){
        $(sliderMela).css("transform", "translate(-40%)");
    })
});