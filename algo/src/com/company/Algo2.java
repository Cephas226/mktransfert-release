package com.company;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Algo1 implements Runnable{
    private Scanner scanner = new Scanner(System.in);
    static double calculateTaux(int nmbreHeure,double tauxHoraire) {
        int heureSup=nmbreHeure-160;
        double salaire=0;
        if (nmbreHeure<0 ||tauxHoraire<0){
            System.err.printf("Veuillez entrer des valeurs positives"+'\n');
        }
        else {
            if (heureSup>160){
                salaire=nmbreHeure*(tauxHoraire +(tauxHoraire*0.25));
                System.out.printf("Le Salaire est :  "+salaire+"\n");
            }
            else if (heureSup>200){
                salaire=nmbreHeure*(tauxHoraire +(tauxHoraire*0.25));
                System.out.printf("Le Salaire est : "+salaire+"\n");
            }
            else {
                salaire=nmbreHeure*tauxHoraire;
                System.out.printf("Le Salaire est : "+salaire+"\n");
            }
        }
        return salaire;
    }
    public static void main(String[] args) {
        (new Algo1()).run();
    }

    @Override
    public void run() {
        boolean quit = false;
        while (!quit) {
            log("Entrez les paramètres pour le calcul du Salaire: ");
            log("---------------------");
            int nombreHeure = 0;
            int tauxHoraire = 0;
            try {
                log("Entrez le nombre d'heure : ");
                nombreHeure = scanner.nextInt();
                log("Entrez le taux horaire : ");
                tauxHoraire=scanner.nextInt();
            } catch (InputMismatchException e) {
                if (scanner.next().equals("exit")) {
                    quit = true;
                } else {
                    System.err.println("La valeur saisie est invalide, veuillez recommencer.");
                }
                continue;
            }
            calculateTaux(nombreHeure,tauxHoraire);
        }
        log("Fermeture du programme.");
    }

    private void log(String message) {
        System.out.println(message);
    }
}
