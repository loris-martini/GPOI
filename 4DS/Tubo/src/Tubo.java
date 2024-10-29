public class Tubo {
    private int altezza;
    private int raggio;
    final float pi = (float) 3.1415;

    public Tubo(int r, int h) throws Exception{
        if(r <= 0 || h <= 0){
            throw new Exception("Input errati!");
        }
        altezza = h;
        raggio = r;
    }

    public float volume(){
        return pi*(raggio*raggio)*altezza;
    }

    public float superficie(){
        return 2*pi*raggio*altezza;
    }

    public String toString() {
        return "Raggio: " + raggio + "\nAltezza: " + altezza;
    }
}
