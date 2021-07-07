package com.company;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Algo2 implements Runnable{
    private Scanner scanner = new Scanner(System.in);
    static double calculateCarre(double nmbre) {
        double carre=0;
         carre=nmbre*nmbre;
        System.out.println("Le carré du nombre est "+carre);
        return carre;
    }
    public static void main(String[] args) {
        (new Algo2()).run();
    }

    @Override
    public void run() {
        boolean quit = false;
        while (!quit) {
            log("Calcul du carré");
            log("---------------------");
            int nombre=0;
            try {
                log("Entrez le nombre");
                nombre = scanner.nextInt();
            } catch (InputMismatchException e) {
                if (scanner.next().equals("exit")) {
                    quit = true;
                } else {
                    System.err.println("La valeur saisie est invalide, veuillez recommencer.");
                }
                continue;
            }
            calculateCarre(nombre);
        }
        log("Fermeture du programme.");
    }

    private void log(String message) {
        System.out.println(message);
    }
}
