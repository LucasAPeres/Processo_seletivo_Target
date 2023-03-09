textonormal = input("Digite o texto a ser invertido:")
textoinvertido = ""


for inversao in range(len(textonormal)-1, -1, -1):
    textoinvertido += textonormal[inversao]


print("Texto original:", textonormal)
print("Texto invertido:", textoinvertido)