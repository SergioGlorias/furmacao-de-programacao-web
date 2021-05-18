#include <stdio.h>
// #include <stdlib.h> // Não necessário porque o system("pause") não é usado

int main() {
    printf("Hello World \n"); //Mostrar texto no terminal
    //system("pause"); //Gambirra do Windows, isto usa o comando pause do powershell
    printf("Clique qualquer botão para continuar...."); //só mesmo para dizer que 
    getchar(); // Codigo Oficial do C, ele pausa o codigo e verifica qual caracter você precionou
    return 0; //dar returno da aplicação
}