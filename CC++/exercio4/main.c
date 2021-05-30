#include <stdio.h>
#include <locale.h>
#include <stdlib.h>

int main() {
    setlocale(LC_ALL, "Portuguese");
    printf("Intruduza o seu Primeiro e Último nome: ");
    char nprimeiro[25];
    char nultimo[25];
    scanf("%s %s", nprimeiro, nultimo);
    printf("Intruduza a sua Idade: ");
    int idade;
    scanf("%d", &idade);
    printf("Intruduza o seu pesso: ");
    float peso;
    scanf("%f", &peso);
    printf("Intruduza a cor preferida: ");
    char cor[25];
    scanf("%s", cor);

    system("clear");
    
    printf("Nome: %s %s\n", nprimeiro, nultimo);
    printf("Idade: %d\n", idade);
    printf("Peso: %.2f\n", peso);
    printf("Cor: %s\n", cor);
}