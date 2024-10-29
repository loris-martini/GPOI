import java.util.Scanner;
import java.util.Random;
public class TestTroll {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String nome;
        Random random = new Random();
        int pV = 60;
        int pD = 0, mancato = 0;
        int t = 1;

        boolean scudo = false;
        int scelta = -1;
        Troll t1 = new Troll();

        System.out.println("BENVENUTO NELL'ARENA!\n\nInserisci il tuo nome: ");
        nome = input.nextLine();

        System.out.println("Ti schieri davanti a " + t1.getNome() + "\nLe sue stats: \n\nPuntiVita = " + t1.getPuntiVita() + "\nPuntiDanno = " + t1.getPuntiDanno());
        System.out.println("\n" + nome + " stats: " + pV);
        do {
            do {
                System.out.println("Cosa vuoi fare?\n0) Attacco\n1) Scudo\n:");
                scelta = input.nextInt();
                switch (scelta) {
                    case 0:
                        pD = random.nextInt(11) + 10;
                        break;
                    case 1:
                        scudo = random.nextBoolean();
                        break;
                    default:
                        scelta = -1;
                        System.out.println("Scelta sbagliata!");
                }
            } while (scelta == -1);

            System.out.println("\nTurno " + t);
            if(scelta == 0) {
                mancato = random.nextInt(5);
                if(mancato == 0){
                    System.out.println("Hai mancato " + t1.getNome());
                    pV -= t1.getPuntiDanno();
                }else{
                    System.out.println("Hai provocato a " + t1.getNome() + " " + pD + " punti danno");
                    t1.danno(pD);
                    if(t1.getPuntiVita() != 0) {
                        pV -= t1.getPuntiDanno();
                    }
                }
            }else{
                if(scudo){
                    System.out.println("Ti sei difeso con lo scudo SENZA RICEVERE DANNI!!!");
                    t1.danno(random.nextInt(6) + 5);
                }else{
                    System.out.println("Questa volta lo scudo non è bastato a difenderti!");
                    pV -= t1.getPuntiDanno();
                }
            }
            if(pV < 0){
                pV = 0;
            }
            System.out.println("\nVita " + nome + ": " + pV + "\nVita " + t1.getNome() + ": " + t1.getPuntiVita());
            t++;
        }while(pV > 0 && t1.getPuntiVita() > 0);

        if(pV == 0){
            System.out.println("\nHA VINTO " + t1.getNome());
        }else{
            System.out.println("\nHA VINTO " + nome);
        }
    }
}