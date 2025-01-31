# Feature: Positive B2B Tambah Master Tag di menu Master > Core > Tag

#   Scenario: Login ke B2B dan tambah Master > Core > Tag
#     Given Saya login ke B2B dan ke Menu Master > Core > Tag
#     Then Saat save master tag harus berhasil
@negtambah006
Feature: Negative Menambah Master Tag (tambah.tag.006)

  Scenario: Negative Menambahkan Tag Baru di Master Tag Mengisi semua data ,Pada Tag Name diisi dengan angka saja
    Given Login B2B berhasil (006)
    And Pergi ke menu Master (006)
    And Pergi ke menu Core (006)
    And Pergi ke menu Tag (006)
    When Muncul list tag (006)
    And Klik Create New (006)
    And Mengisi semua data ,Pada Tag Name diisi dengan angka saja (006)
    Then Klik Save, data tidak berhasil disimpan (006)