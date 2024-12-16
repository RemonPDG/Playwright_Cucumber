# Feature: Positive B2B Tambah Master Tag di menu Master > Core > Tag

#   Scenario: Login ke B2B dan tambah Master > Core > Tag
#     Given Saya login ke B2B dan ke Menu Master > Core > Tag
#     Then Saat save master tag harus berhasil
@urutan3
Feature: Menghapus Master Tag

  Scenario: Menghapus Tag di Master Tag
    Given Login ke B2B berhasil
    And menu Master
    And menu Core
    And menu Tag
    When Saya lihat tampilan semua list Tag
    And Cari data yang diinput sebelumnya
    And Klik data tersebut
    And Klik Hapus
    And Isi Alasannya
    Then Klik Hapus, dan hasil berhasil di hapus