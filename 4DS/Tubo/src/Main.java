import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        boolean flag = false;
        int scelta = -1;
        int r, h;
        Tubo t1 = null;

        do{
            System.out.println("\n1) Inserire i dati. \n2) Volume. \n3) Superficie \n0) Esci");
            System.out.println("Inserisci: ");
            scelta = input.nextInt();
            switch (scelta){
                case 0:
                    System.out.println("Arrivederci!");
                    break;
                case 1:
                    do{
                        System.out.println("Raggio: ");
                        r = input.nextInt();
                        System.out.println("Altezza: ");
                        h = input.nextInt();
                        try {
                            t1 = new Tubo(r, h);
                            flag = true;
                            System.out.println(t1.toString());
                        }catch(Exception e){
                            System.out.println("Errore: " + e.getMessage());
                        }
                    }while(!flag);
                    break;
                case 2:
                    System.out.println(t1.volume());
                    break;
                case 3:
                    System.out.println(t1.superficie());
                    break;
                default:
                    System.out.println("Scelta errata!");
            }
        }while(scelta != 0);
    }
}