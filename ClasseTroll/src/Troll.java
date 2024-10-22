import java.util.Random;
public class Troll {
    private String nome;
    private int puntiVita;
    private int puntiDanno;
    private Random random;

    public Troll(){
        nome = "Pippo";
        random = new Random();
        puntiVita = random.nextInt(21) + 50;
        puntiDanno = random.nextInt(11) + 10;
    }

    public void danno(int danno){
        if(danno > puntiVita){
            puntiVita = 0;
        }else {
            puntiVita -= danno;
        }
    }

    public String getNome() {
        return nome;
    }

    public int getPuntiVita() {
        return puntiVita;
    }

    public int getPuntiDanno() {
        return puntiDanno;
    }
}
