#include <stdio.h>
#include <stdlib.h>

int main() {
    //const float gravidade = 9.8; // constante da gravidade
    int i;
    //int a = 125; //numero 125
    //int b = 0435; //returna 258
    //int c = 0x1FA; //Hexa decimal 
    //char d = 0;
    //d += 1000; //returna -24 e alem disso é o esquema para não não dar erro
    //printf("Valor de a : %d\n", a); 
    //printf("Valor de b : %d\n", b);
    //printf("Valor de c : %d\n", c);
    //printf("Valor de d : %d\n", d);
    //system("pause");
    //getchar(); /*–usa esta função em vez de system(pause), se tens Linux ou Mac)*/
    
    printf("TABELA ASCII\n");
    for (i = 0; i <= 255; i++) { //Percorre a tabela ASCII do 33 a 128
        //printf("%d: ", i);
        //printf("%c\n", i);
        printf("Decimal: %i   Octal: %o   Hexadecimal: %x   Caractere: %c \n", i, i, i, i);
        //Obs: %i imprime iteiro, %o imprime octal, %x imprime Hexadecimal, %c imprime caractere char
    }
    printf("\n\t\tFIM\n\n");
    getchar();
    
    system("clear"); //limpa o terminal
    printf("\n\n");
    printf("\n\t\xC9\xCD\xBB");
    printf("\n\t\xBA   \xCE \xCE");
    printf("\n\t\xC8\xCD\xBC");
    printf("\n\n");
    getchar();


    //printf("%f\n", gravidade); //mostra no terminal
    
    return 0;
}